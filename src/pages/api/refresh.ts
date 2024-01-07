import { NextApiRequest, NextApiResponse } from 'next';
// import { JsonWebTokenError } from 'jsonwebtoken';
import { verifyRefreshToken, generateAccessToken } from '@/utils/auth';
import { dataUser } from '../../../public/data/user';

export default function refresh(req: NextApiRequest, res: NextApiResponse<any>) {
  const method: string = req.method!;

  switch (method) {
    case 'POST':
      try {
        const { body } = req;
        const { refreshToken } = body;

        const decoded = verifyRefreshToken(refreshToken);
        const userId = decoded.userId;
        const userIndex = dataUser.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
          // 새로운 액세스 토큰 생성
          // const accessToken = generateAccessToken(userId, '1m'); // 테스트용
          const accessToken = generateAccessToken(userId, '30m');

          res.status(200).json({ message: 'accessToken 갱신 성공', accessToken, refreshToken });
        } else {
          res.status(401).json({ message: '사용자를 찾을 수 없습니다.' });
        }
      } catch (e) {
        console.error('요청 오류', e);
        res.status(500).json({ error: '서버 오류' });
      }
      break;
    default:
      res.status(405).json({ error: '허용되지 않는 메서드' });
  }
}
