import Image from 'next/image'
import { DragEvent, ChangeEvent, useState } from 'react'
import LoadingIndicator from './LoadingIndicator'

type props = {
  restorePhoto: (url: string) => void
}

export default function Uploader({ restorePhoto }: props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    uploadPhoto(e.dataTransfer.files[0])
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) uploadPhoto(files[0])
  }
  const uploadPhoto = async (file: File) => {
    const regE = /\w+\.(jpg|png|jpeg)$/
    if (!regE.test(file.name)) {
      setError('지원되는 이미지 파일이 아닙니다 (*.jpg *jpeg *.png)')
      return
    }

    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    )

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()

    if (!res.ok) {
      setError(data.error.message)
    } else {
      restorePhoto(data.secure_url)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='container'>
        {loading && (
          <label className='label-upload'>
            <LoadingIndicator />
          </label>
        )}
        {error && (
          <>
            <label className='label-upload'>
              <Image src={'/error.svg'} alt='error' width={48} height={48} />
              <p className='error'>
                업로드 중 에러가 발생했습니다 {'\n'}({error})
              </p>
            </label>
            <button
              className='new-upload'
              onClick={() => {
                setError(null)
              }}
            >
              새 이미지 업로드
            </button>
          </>
        )}
        {!loading && !error && (
          <label
            className='label-upload'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div>
              <Image src={'/upload.svg'} alt='upload' width={40} height={40} />
            </div>
            <span>이미지 업로드</span>
            <p className='descript'>이미지를 드래그 해오거나 클릭하세요</p>
            <input
              className='input-upload'
              type={'file'}
              accept='.jpg, .jpeg, .png'
              onChange={handleChange}
            />
          </label>
        )}
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .label-upload {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 100%;
            width: 800px;
            height: 300px;
            border: 2px dashed lightgray;
            border-radius: 20px;
            font-size: 2rem;
            font-weight: bold;
            transition: all 1s;
          }
          .label-upload:hover {
            cursor: ${error ? 'auto' : 'pointer'};
            background-color: ${error
              ? 'transparent'
              : 'rgba(215, 179, 238, 0.482)'};
          }
          .label-upload p {
            margin-top: 10px;
            color: rgb(159, 156, 156);
            font-size: 1.4rem;
          }
          .label-upload .error {
            color: rgba(255, 0, 0, 0.553);
            text-align: center;
            white-space: pre-line;
          }

          .new-upload {
            margin-top: 15px;
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

          .input-upload {
            display: none;
          }
        `}
      </style>
    </>
  )
}
