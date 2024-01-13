import type { NextApiRequest, NextApiResponse } from 'next';
import { dataUser } from '../../../public/data/user';
import { generateAccessToken, generateRefreshToken } from './utils/auth/token';

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
        const { id, pw } = body;

        const loginUser = dataUser.filter((u) => u.id === id && u.pw === pw);

        if (loginUser.length > 0) {
          const accessToken = generateAccessToken(id, '30m');
          const refreshToken = generateRefreshToken(id, '1d');
          res.status(200).json({ accessToken, refreshToken });
        } else {
          res.status(200).json({ message: '로그인 정보가 올바르지 않습니다.' });
        }
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: '서버 오류' });
      }
      break;
  }
}
