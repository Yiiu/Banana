import * as http from 'http';
import * as Router from 'koa-router';
import { UrlLike } from 'next';

import { getCustomRepository } from 'typeorm';
import { SettingRepository } from './repository/Setting';

type getRequestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  parsedUrl?: UrlLike
) => Promise<void>;

const router = new Router();

export const nextRoute = (handle: getRequestHandler) => {
  router.get('/_next/*', async (ctx) => {
    handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.get('/static/*', async (ctx) => {
    handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  router.get(/^(?!\/api)/, async (ctx) => {
    const { url } = ctx.req;
    const settingRepository = getCustomRepository(SettingRepository);
    const setting = await settingRepository.findOne();
    if (!setting && url !== '/hello') {
      ctx.redirect('/hello');
    } else {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }
  });
};

export default router;
