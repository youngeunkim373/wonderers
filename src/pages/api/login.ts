import type { NextApiRequest, NextApiResponse } from 'next';
import { dataUser } from '../../../public/data/user';
import { generateAccessToken, generateRefreshToken } from '@/utils/auth';

export default function login(req: NextApiRequest, res: NextApiResponse<any>) {
  const method: string = req.method!;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(dataUser);
      } catch (e) {
        console.error('Request error', e);
        res.status(404).json({ error: 'An error occured while fetching data' });
      }
      break;
    case 'POST':
      try {
        const { body } = req;
        const { userId, userPw } = body.userData;

        const userIndex = dataUser.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
          const user = dataUser[userIndex];

          if (user.pw === userPw) {
            // 아이디와 비밀번호 모두 일치할 경우
            const accessToken = generateAccessToken(userId, '1m'); // 테스트용
            // const accessToken = generateAccessToken(userId, '30m');
            const refreshToken = generateRefreshToken(userId, '1d');

            dataUser[userIndex] = {
              ...user,
              refreshToken,
            };

            res.status(200).json({ message: '로그인 성공', accessToken, refreshToken }); // 토큰 반환
          } else {
            // 아이디는 일치하지만 비밀번호가 일치하지 않을 경우
            res.status(401).json({ message: '비밀번호가 올바르지 않습니다.' });
          }
        } else {
          // 일치하는 아이디가 없을 경우
          res.status(401).json({ message: '아이디가 존재하지 않습니다.' });
        }
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: '서버 오류' });
      }
      break;
  }
}
