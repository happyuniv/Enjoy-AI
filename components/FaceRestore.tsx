import Image from 'next/image'
import { DragEvent, ChangeEvent, useState } from 'react'
import LoadingIndicator from './LoadingIndicator'
import Uploader from './Uploader'

export default function FaceRestore() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [uploadUrl, setUploadUrl] = useState<null | string>(null)
  const [restoredImage, setResotedImage] = useState<null | string>(null)

  const restorePhoto = async (url: string) => {
    setUploadUrl(url)
    setLoading(true)

    const res = await fetch('/api/restore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data)
    } else {
      setResotedImage(data)
    }
    setLoading(false)
  }

  const uploadNew = () => {
    setError(null)
    setUploadUrl(null)
    setResotedImage(null)
  }

  return (
    <>
      <div className='container'>
        {!uploadUrl && <Uploader restorePhoto={restorePhoto} />}
        {uploadUrl && (
          <div className='container-compare'>
            <div className='original'>
              <div className='title'>원본 이미지</div>
              <Image
                src={uploadUrl}
                alt='face'
                width={500}
                height={300}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className='restored'>
              <div className='title'>복원 이미지</div>
              {loading && (
                <div className='wrapper'>
                  <LoadingIndicator />
                </div>
              )}
              {error && (
                <div className='wrapper'>
                  <Image
                    src={'/error.svg'}
                    alt='error'
                    width={48}
                    height={48}
                  />
                  <p className='error'>
                    업로드 중 에러가 발생했습니다 {'\n'}({error})
                  </p>
                </div>
              )}
              {!loading && !error && restoredImage && (
                <Image
                  src={restoredImage}
                  alt='face'
                  width={500}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              )}
            </div>
          </div>
        )}
        {(error || restoredImage) && (
          <button className='new-upload' onClick={uploadNew}>
            새 이미지 업로드
          </button>
        )}
      </div>

      <style jsx>
        {`
          .container {
            margin-top: 50px;
          }

          .container-compare {
            display: flex;
            justify-content: center;
          }

          .container-compare .title {
            margin: 20px 0;
            color: var(--theme);
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
          }

          .container-compare .original {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .container-compare .restored {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 10px;
          }

          .container-compare .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            width: 100%;
            height: 100%;
            border: 1px solid lightgray;
            font-size: 2rem;
            font-weight: bold;
          }

          .wrapper .error {
            margin-top: 10px;
            color: rgba(255, 0, 0, 0.553);
            font-size: 1.4rem;
            text-align: center;
            white-space: pre-line;
          }

          .new-upload {
            display: block;
            margin: 30px auto;
            padding: 10px;
            border: none;
            color: white;
            font-size: 1.6rem;
            font-weight: bold;
            background-color: var(--theme);
            transition: all 1s;
          }
          .new-upload:hover {
            cursor: pointer;
            color: var(--theme);
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}
