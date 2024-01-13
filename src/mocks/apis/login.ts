import { rest } from 'msw';
import { mswApiHost } from '../apiHost';
import { mockedUser } from '../data/user';

const getLogin = rest.get(`${mswApiHost}/login`, (req, res, ctx) => {
  return res(ctx.json(mockedUser));
});

const postLogin = rest.post(`${mswApiHost}/login`, (req, res, ctx) => {
  const { id, pw, name, country, lang } = req.body as any;
  mockedUser.unshift({ id, pw, name, country, lang });
  return res(ctx.json(mockedUser));
});

export const mockedLoginApi = [getLogin, postLogin];
