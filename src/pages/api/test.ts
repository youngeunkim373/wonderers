// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from "axios";
import { mockedTest } from '@/mocks/data/test';

type Data = {
  name: string
}

export default function test(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const method: string = req.method!;
  const path: string = req.query.path || req.body.path;

  switch (path) {
    case "getTest":
      try {
        res.status(200).json(mockedTest);
      } catch (e) {
        console.error("Request error", e);
        res
          .status(404)
          .json({ error: "An error occured while fetching data" });
      }
      break;
     case "postTest": 
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

