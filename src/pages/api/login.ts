import type { NextApiRequest, NextApiResponse } from 'next';
import { mockedUser } from '@/mocks/data/user';

export default function login(req: NextApiRequest, res: NextApiResponse<any>) {
  const jwt = require('jsonwebtoken');

  // 사용자 정보를 기반으로 토큰 생성
  const generateAccessToken = (userId: string) => {
    // 무작위로 생성된 사용자
    const randomUserId = new Date().getTime().toString();

    const accessToken = jwt.sign({ userId }, randomUserId, { expiresIn: '30m' });

    return accessToken;
  };

  const method: string = req.method!;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(mockedUser);
      } catch (e) {
        console.error('Request error', e);
        res.status(404).json({ error: 'An error occured while fetching data' });
      }
      break;
    case 'POST':
      try {
        const { body } = req;
        const { userId, userPw } = body.userData;

        const user = mockedUser.find((u) => u.id === userId);

        if (user) {
          if (user.pw === userPw) {
            // 아이디와 비밀번호 모두 일치할 경우
            const accessToken = generateAccessToken(userId);
            res.status(200).json({ message: '로그인 성공', accessToken }); // 토큰 반환
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
