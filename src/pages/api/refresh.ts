import { NextApiRequest, NextApiResponse } from 'next';
import { generateAccessToken, verifyRefreshToken } from './utils/auth/token';
import { CustomError } from './utils/common/custonError';

export default function refresh(req: NextApiRequest, res: NextApiResponse<any>) {
  const method: string = req.method!;

  switch (method) {
    case 'POST':
      try {
        const { body } = req;
        const { refreshToken } = body;

        const decoded = verifyRefreshToken(refreshToken);
        if (decoded) {
          const userId = decoded.userId;
          // 새로운 액세스 토큰 생성
          // const accessToken = generateAccessToken(userId, '1m'); // 테스트용
          const accessToken = generateAccessToken(userId, '30m');
          res.status(200).json({ message: 'accessToken 갱신 성공', accessToken, refreshToken });
        }
      } catch (e) {
        if (e instanceof CustomError) {
          res.status(e.statusCode).json({ error: e.message });
        } else {
          res.status(500).json({ error: '서버 오류' });
        }
      }
      break;
    default:
      res.status(405).json({ error: '허용되지 않는 메서드' });
  }
}
