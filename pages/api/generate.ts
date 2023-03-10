// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payload = req.body

  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version:
        'db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',
      input: payload,
    }),
  })

  const jsonStartResponse = await response.json()
  const pollingUrl = jsonStartResponse.urls.get

  let generatedImage: string | null = null
  while (!generatedImage) {
    console.log('polling for result...')
    const finalResponse = await fetch(pollingUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + process.env.REPLICATE_API_KEY,
      },
    })
    const jsonFinalResponse = await finalResponse.json()

    if (jsonFinalResponse.status === 'succeeded') {
      generatedImage = jsonFinalResponse.output
    } else if (jsonFinalResponse.status === 'failed') {
      break
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  if (generatedImage) res.status(200).json(generatedImage[0])
  else res.status(500).json('Failed to generate image')
}
