import type { NextApiRequest, NextApiResponse } from 'next'
import { mockedTest } from '@/mocks/data/test';

export default function test(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const method: string = req.method!;

  switch (method) {
    case "GET":
      try {
        res.status(200).json(mockedTest);
      } catch (e) {
        console.error("Request error", e);
        res
          .status(404)
          .json({ error: "An error occured while fetching data" });
      }
      break;
     case "POST": 
      try {
        const { body } = req;
        const { id, name, country, lang } = body;
        mockedTest.push({id, name, country, lang});
      } catch (e) {
        console.error("Request error", e);
        res
          .status(404)
          .json({ error: "An error occured while fetching data" });
      }
      break;
  }
}

