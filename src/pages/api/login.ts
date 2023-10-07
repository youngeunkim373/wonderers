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
        const { id, pw, name, country, lang } = body;
        mockedUser.push({ id, pw, name, country, lang });
      } catch (e) {
        console.error('Request error', e);
        res.status(404).json({ error: 'An error occured while fetching data' });
      }
      break;
  }
}
