import { rest } from 'msw';
import { mswApiHost } from '@/mocks/apiHost';
import { decodeRefreshToken, generateAccessToken } from '@/utils/auth';

const postRefresh = rest.post(`${mswApiHost}/refresh`, (req, res, ctx) => {
  try {
    const { refreshToken } = req.body as any;

    const userId = decodeRefreshToken(refreshToken);

    // 새로운 액세스 토큰 생성
    const newAccessToken = generateAccessToken(userId, '10s');

    return res(ctx.status(200), ctx.json({ accessToken: newAccessToken }));
  } catch (error) {
    console.error('Refresh mock api failed:', error);
    return res(ctx.status(500), ctx.json({ error: 'Refresh mack api failed' }));
  }
});

export const mockedRefreshApi = [postRefresh];
