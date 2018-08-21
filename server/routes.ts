import * as http from 'http';
import * as Router from 'koa-router';
import { UrlLike } from 'next';

type getRequestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  parsedUrl?: UrlLike
) => Promise<void>;

const router = new Router();

router.get('/api/adf', () => {
  console.log(123);
});

export const nextRoute = (handle: getRequestHandler) => {
  router.get(/^(?!\/api)/, async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
};

export default router;
