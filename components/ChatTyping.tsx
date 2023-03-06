import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type Message = {
  who: 'user' | 'bot'
  message: string
}

type props = Message & {
  setTyping: Dispatch<SetStateAction<boolean>>
}

export function BotLoading() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const load = setTimeout(() => {
      setMessage(message + '.')

      if (message === '...') setMessage('.')
    }, 400)

    return () => clearTimeout(load)
  }, [message])

  return (
    <div className='wrapper ai'>
      <div className='container-message'>
        <div className='profile'>
          <Image src='/bot.svg' alt='logo' width={40} height={40} />
        </div>
        <div className='message'>{message}</div>
      </div>
    </div>
  )
}
export default function ChatTyping({ who, message,setTyping }: props) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (who === 'bot')
      setTimeout(() => {
        setText(text + message.charAt(index))
        setIndex(index + 1)
      }, 50)

    if(index===message.length) setTyping(false)
  }, [index])

  return (
    <>
      {who === 'user' ? (
        <div className='wrapper'>
          <div className='container-message'>
            <div className='profile'>
              <Image src='/logo.svg' alt='logo' width={32} height={32} />
            </div>
            <div className='message'>{message}</div>
          </div>
        </div>
      ) : (
        <div className={'wrapper ai'}>
          <div className='container-message'>
            <div className='profile'>
              <Image src='/bot.svg' alt='logo' width={40} height={40} />
            </div>
            <div className='message'>{text}</div>
          </div>
        </div>
      )}
    </>
  )
}
