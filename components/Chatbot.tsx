import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import ChatTyping, { BotLoading, Message } from './ChatTyping'

export default function Chatbot() {
  const [loading, setLoading] = useState(false)
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    { who: 'bot', message: '안녕하세요!' },
  ] as Message[])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight)
  }, [messages])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input) return

    const prompt = input

    setMessages([...messages, { who: 'user', message: input }])
    setInput('')
    setTyping(true)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      })
      const result = await res.json()
      const botMessage = result.trim()
      setMessages((messages) => [
        ...messages,
        { who: 'bot', message: botMessage },
      ])
      setLoading(false)
    } catch (e) {
      console.error(e)
      setTyping(false)
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container-chatbot'>
        <div className='container-chat' ref={scrollRef}>
          {messages.map(({ who, message }, index) => (
            <ChatTyping
              key={index}
              who={who}
              message={message}
              setTyping={setTyping}
            />
          ))}
          {loading && <BotLoading />}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='container-input'>
            <input
              type='text'
              placeholder={typing ? '대답하는중...' : '채팅해봐요!'}
              disabled={typing}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button disabled={typing}>
              <Image src='/send.svg' alt='send' width={40} height={40} />
            </button>
          </div>
        </form>
      </div>
      <style jsx global>
        {`
          .container-chatbot {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            border: 1px solid lightgray;
          }
          .container-chat {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            color: black;
            overflow-y: auto;
          }

          .container-chat::-webkit-scrollbar {
            width: 10px;
          }

          .container-chat::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: rgba(199, 197, 197, 0.478);
          }
          .container-chat::-webkit-scrollbar-thumb:hover {
            background-color: rgba(199, 197, 197, 0.322);
          }
          .container-chat::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .container-message {
            display: flex;
            align-items: flex-start;
            margin: 0 auto;
            padding: 10px 0;
            width: 100%;
            max-width: 1000px;
          }

          .ai {
            background-color: rgba(235, 223, 223, 0.359);
          }

          .profile {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
            width: 40px;
            height: 40px;
          }

          .message {
            margin: 0 10px;
            padding: 10px;
            font-size: 2rem;
            word-break: break-all;
          }

          form {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
            width: 100%;
            background-color: transparent;
          }

          .container-input {
            position: relative;
            margin-top: 10px;
            width: 80%;
          }
          input {
            padding: 20px;
            width: 100%;
            font-size: 18px;
            border: 1px solid lightgray;
            border-radius: 50px;
            background-color: white;
            box-shadow: 0 0 5px rgba(189, 232, 240, 0.979);
            outline: none;
          }
          button {
            position: absolute;
            top: 50%;
            right: 20px;
            outline: 0;
            border: 0;
            cursor: pointer;
            background: transparent;
            transform: translateY(-50%);
          }
        `}
      </style>
    </>
  )
}
