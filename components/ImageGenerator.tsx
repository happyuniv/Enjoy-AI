import Image from 'next/image'
import { useState } from 'react'
import LoadingIndicator from './LoadingIndicator'

export default function ImageGenerator() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [payload, setPayload] = useState<Record<string, string>>({
    image_dimensions: '768x768',
  })
  const [result, setResult] = useState('')

  const handleSubmit = async () => {
    setError(null)
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data)
    } else {
      setResult(data)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='container'>
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
            {loading && (
              <div className='holder'>
                <LoadingIndicator />
              </div>
            )}
            {error && (
              <div className='holder'>
                <Image src={'/error.svg'} alt='error' width={48} height={48} />
                <p className='error'>
                  이미지 생성 중 에러가 발생했습니다 {'\n'}({error})
                </p>
              </div>
            )}
            {!loading && !error && !result && (
              <div className='holder'>
                <Image src={'/photo.svg'} alt='photo' width={32} height={32} />
              </div>
            )}
            {result && (
              <div className='generated'>
                <Image src={result} alt='생성 이미지' fill />
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            margin-top: 20px;
          }

          .container .left {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .container label {
            margin: 15px 0;
            color: var(--theme);
            font-size: 2.5rem;
            font-weight: bold;
          }

          .container textarea {
            padding: 10px;
            width: 100%;
            font-size: 2rem;
          }

          .container select {
            display: flex;
            padding: 10px;
            font-size: 2rem;
          }

          .container button {
            margin-top: 15px;
            padding: 10px;
            border: none;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            background-color: var(--theme);
            transition: all 1s;
          }

          .container button:hover {
            cursor: pointer;
            color: var(--theme);
            background-color: white;
          }

          .container .right {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding-left: 20px;
          }

          .container-output {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding-top: ${result ? '0' : '100%'};
            width: 100%;
            max-width: 768px;
            height: auto;
            border: 1px solid lightgray;
          }

          .container-output .holder {
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            transform: translate(-50%, -50%);
          }
          .holder .error {
            margin-top: 10px;
            color: rgba(255, 0, 0, 0.553);
            font-size: 1.4rem;
            text-align: center;
            white-space: pre-line;
          }

          .container-output .generated {
            position: relative;
            padding-top: 100%;
            width: 100%;
          }

          @media screen and (max-width: 600px) {
            .container {
              flex-direction: column;
            }

            .container .right {
              margin-top: 30px;
              padding: 0;
            }
          }
        `}
      </style>
    </>
  )
}
