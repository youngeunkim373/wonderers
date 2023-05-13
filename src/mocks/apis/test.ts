import { rest } from 'msw';
import { mswApiHost } from '../apiHost';
import { mockedTest } from '../data/test';

const getTest = rest.get(`${mswApiHost}/test`, (req, res, ctx) => {
    return res(ctx.json(mockedTest));
});

const postTest = rest.post(`${mswApiHost}/test`, (req, res, ctx) => {
    const { id, name, country, lang } = req.body as any;
    mockedTest.unshift({id, name, country, lang});
    return res(ctx.json(mockedTest));
});

export const mockedTestApi = [
    getTest,
    postTest
];

