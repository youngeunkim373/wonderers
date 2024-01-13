import { rest } from 'msw';
import { mswApiHost } from '@/mocks/apiHost';
import { generateAccessToken, verifyRefreshToken } from '@/pages/api/utils/auth/token';

const postRefresh = rest.post(`${mswApiHost}/refresh`, (req, res, ctx) => {
  try {
    const { refreshToken } = req.body as any;

    const userId = verifyRefreshToken(refreshToken);
    // 새로운 액세스 토큰 생성
    const newAccessToken = generateAccessToken(userId?.userId, '10s');
    return res(ctx.status(200), ctx.json({ accessToken: newAccessToken }));
  } catch (error) {
    console.error('Refresh mock api failed:', error);
  }
});

export const mockedRefreshApi = [postRefresh];
