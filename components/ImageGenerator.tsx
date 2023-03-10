import Image from 'next/image'
import { useState } from 'react'

export default function ImageGenerator() {
  const [loading, setLoading] = useState(false)
  const [payload, setPayload] = useState<Record<string, string>>({
    image_size: '768x768',
  })
  const [result, setResult] = useState('')

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setResult(data)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container-generator'>
        <div className='left'>
          <label htmlFor='input-prompt'>명령어</label>
          <textarea
            id='input-prompt'
            rows={10}
            cols={50}
            onChange={(e) => {
              setPayload({ ...payload, prompt: e.target.value })
            }}
          ></textarea>
          <label htmlFor='input-negative-prompt'>부정 명령어</label>
          <textarea
            id='input-negative-prompt'
            rows={3}
            cols={15}
            onChange={(e) => {
              setPayload({ ...payload, negative_prompt: e.target.value })
            }}
          ></textarea>
          <label htmlFor='select-size'>이미지 크기</label>
          <select
            id='select-size'
            defaultValue={'768x768'}
            onChange={(e) => {
              setPayload({ ...payload, image_dimensions: e.target.value })
            }}
          >
            <option value={'512x512'}>512 x 512</option>
            <option value={'768x768'}>768 x 768</option>
          </select>
          <button onClick={handleSubmit} disabled={loading}>
            이미지 생성하기
          </button>
        </div>
        <div className='right'>
          <label>생성 이미지</label>
          <div className='container-output'>
            {result ? (
              <div className='generated'>
                <Image src={result} alt='생성 이미지' fill />
              </div>
            ) : (
              <div className='holder'>
                {loading ? (
                  <span>로딩중</span>
                ) : (
                  <Image
                    src={'/photo.svg'}
                    alt='photo'
                    width={32}
                    height={32}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container-generator {
            display: flex;
            margin-top: 20px;
          }

          .container-generator .left {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .container-generator label {
            margin: 15px 0;
            color: var(--theme);
            font-size: 2.5rem;
            font-weight: bold;
          }

          .container-generator textarea {
            padding: 10px;
            width: 100%;
            font-size: 2rem;
          }

          .container-generator select {
            display: flex;
            padding: 10px;
            font-size: 2rem;
          }

          .container-generator button {
            margin-top: 15px;
            padding: 10px;
            border: none;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            background-color: var(--theme);
            transition: all 1s;
          }

          .container-generator button:hover {
            cursor: pointer;
            color: var(--theme);
            background-color: white;
          }

          .container-generator .right {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding-left: 20px;
          }

          .container-output {
            width: 100%;
            max-width: 768px;
            height: ${result ? 'auto' : '768px'};
            border: 1px solid lightgray;
          }

          .container-output .holder {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .container-output .generated {
            padding-top: 100%;
            position: relative;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}
