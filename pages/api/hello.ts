import { NextApiRequest, NextApiResponse } from 'next';

// noinspection JSUnusedGlobalSymbols
export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: 'Hello' });
};
