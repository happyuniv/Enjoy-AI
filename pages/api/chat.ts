// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userMessage = req.body
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
    max_tokens: 2048,
    temperature: 0.7,
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    const result = data.choices[0].message.content

    return res.status(200).json(result)
  } catch (e) {
    return res.status(500).json('Failed to fetch data')
  }
}
