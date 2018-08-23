import 'reflect-metadata';

import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as next from 'next';
import { useContainer, useKoaServer } from 'routing-controllers';
import { Container } from 'typedi';

import { ApolloServer, makeExecutableSchema } from 'apollo-server-koa';

import { mutation, query, schema  } from './graphql/index';
import { database } from './library/database';

import * as conf from '../next.config.js';
import router, { nextRoute } from './routes';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
console.log(conf);
database()
  .then(() => {
    const app = next({
      dev,
      conf,
      dir: './src'
    });

    const resolvers = {
      Query: query(),
      Mutation: mutation()
    };

    const aplloSchema = makeExecutableSchema({
      typeDefs: schema(),
      resolvers,
    });

    const handle = app.getRequestHandler();

    const graphqlServer = new ApolloServer({
      schema: aplloSchema,
      context: ({ ctx }: any) => ctx,
      formatError: (error: any) => {
        console.log(error);
        return new Error('Internal server error');
      }
    });

    useContainer(Container);

    nextRoute(handle);

    app.prepare()
      .then(() => {
        const server = new Koa();
        useKoaServer(server, {
          cors: true,
          routePrefix: '/api',
          controllers: [`${__dirname}/controllers/*{js,ts}`],
          defaultErrorHandler: false
        });

        server.use(logger());

        server.use(async (ctx, nextCbk) => {
          ctx.res.statusCode = 200;
          await nextCbk();
        });
        graphqlServer.applyMiddleware({ app: server });
        server.use(router.routes());

        server.listen(port, () => {
          console.log(`> Ready on http://localhost:${port}`);
        });
      });
  });
