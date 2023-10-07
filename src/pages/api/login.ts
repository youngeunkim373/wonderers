import type { NextApiRequest, NextApiResponse } from 'next';
import { mockedUser } from '@/mocks/data/user';

export default function login(req: NextApiRequest, res: NextApiResponse<any>) {
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
        const { userId, userPw } = body;

        const user = mockedUser.find((u) => u.id === userId);

        if (user) {
          if (user.pw === userPw) {
            // 아이디와 비밀번호가 일치할 경우 여기서 토큰 생성
            res.status(200).json({ message: '로그인 성공' });
          } else {
            // 아이디는 일치하지만 비밀번호가 일치하지 않을 경우
            res.status(401).json({ error: '비밀번호가 올바르지 않습니다.' });
          }
        } else {
          // 일치하는 아이디가 없을 경우
          res.status(401).json({ error: '아이디가 존재하지 않습니다.' });
        }
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: '서버 오류' });
      }
      break;
  }
}
