// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from 'libs/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const result = await client.user.findMany({
    take: 10,
  })

  console.log('result: ', result)
  res.status(200).json({ name: 'John Doe' })
}
