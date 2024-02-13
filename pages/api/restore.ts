// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payload = {
    img: req.body,
    version: 'v1.4',
    scale: 2,
  }

  try {
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version:
          '9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
        input: payload,
      }),
    })

    const jsonStartResponse = await response.json()
    const pollingUrl = jsonStartResponse.urls.get

    let restoredImage: string | null = null
    while (!restoredImage) {
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
        restoredImage = jsonFinalResponse.output
      } else if (jsonFinalResponse.status === 'failed') {
        break
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    if (restoredImage) return res.status(200).json(restoredImage)
    else return res.status(500).json('Failed to generate image')
  } catch (e) {
    return res.status(500).json('Failed to fetch data')
  }
}
