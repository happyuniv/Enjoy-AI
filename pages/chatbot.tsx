import Chatbot from '@/components/Chatbot'
import Image from 'next/image'

export default function chatbot() {
  return (
    <>
      <section className='intro'>
        <h1 className='title'>챗봇 (Chat Bot)</h1>
        <div className='tag'>#챗봇 #챗GPT #ChatGPT #GPT3</div>
        <h2>검색부터 번역 공부 코딩까지! {'\n'} 다재다능한 AI와 대화해보자!</h2>
      </section>
      <section className='ability'>
        <h2>
          <Image src='/bot.svg' alt='logo' width={40} height={40} />
          &nbsp;뭘 할수 있는데?
        </h2>
        <div className='container'>
          <article>
            <div className='wrapper'>
              <Image
                src={'/chatbot-1.png'}
                alt=''
                fill
                style={{
                  border: '1px solid lightgray;',
                }}
              />
              <div className='descript'>조카 생일선물 추천해줌ㅋㅋ</div>
            </div>
          </article>
          <article>
            <div className='wrapper'>
              <Image
                src={'/chatbot-2.png'}
                alt=''
                fill
                style={{
                  border: '1px solid lightgray;',
                }}
              />
              <div className='descript'>역사 가르쳐줌 ㄷㄷ</div>
            </div>
          </article>
          <article>
            <div className='wrapper'>
              <Image
                src={'/chatbot-3.png'}
                alt=''
                fill
                style={{
                  border: '1px solid lightgray;',
                }}
              />
              <div className='descript'>코딩도 해줌 ㄷㄷ</div>
            </div>
          </article>
          <article>
            <div className='wrapper'>
              <Image
                src={'/chatbot-4.png'}
                alt=''
                fill
                style={{
                  border: '1px solid lightgray;',
                }}
              />
              <div className='descript'>인생 조언도 해줌 ㅡㅡ</div>
            </div>
          </article>
        </div>
      </section>
      <section className='learn'>
        <h2>배우기</h2>
        <ul>
          <li>챗봇: 인공지능 대화형 서비스. 채팅(Chat)+로봇(Bot) 을 합친말</li>
          <li>GPT: OpenAI에서 개발한 언어모델.</li>
          <li>GPT-3: GPT의 버전3 </li>
          <li>ChatGPT: OpenAI에서 개발하고 있는 GPT-3.5 기반 챗봇</li>
        </ul>
      </section>
      <section className='experience'>
        <h2 id='experience'>경험하기</h2>
        <ul>
          <li>
            여기서 경험하는 인공지능은 OpenAI에서 제공하는 GPT 3 기반의
            text-davinchi 모델을 사용합니다 {'\n'} ChatGPT를 경험하려면&nbsp;
            <a
              href={'https://chat.openai.com/chat'}
              target='_blank'
              rel='noopener noreferrer'
            >
              여기로
            </a>
          </li>
          <li>
            모델에 사용된 데이터는 2021년 까지로 현재 사건들을 반영하지 않습니다
          </li>
        </ul>
        <Chatbot />
      </section>

      <style jsx>{`
        .intro {
          padding: 30px;
          background: linear-gradient(to bottom left, rgba(203, 249, 241, 0.147) 30%,white );
        }
        .intro h1 {
          font-size: 5rem;
        }

        .intro .tag {
          margin-top: 10px;
          color: lightgray;
          font-size: 1.4rem;
          font-weight: bold;
        }
  
        .intro h2 {
          margin-top: 30px;
          font-size: 4rem;
          white-space: pre-line;
        }

        .ability {
          padding: 0 30px;
        }

        .ability h2 {
          display: flex;
          align-items: center;
          font-size: 3rem;
        }

        .ability .container {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
        }
        .ability article {
          display: flex;
          flex-direction: column;
          width: 50%;
          border: 1px solid lightgray;
        }

        .ability .wrapper {
          width: 100%;
          min-height: 500px;
          position: relative;
        }

        .ability .descript {
          position: absolute;
          top: 30px;
          right: 10px;
          color: gray;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
        }

        .learn {
          padding: 30px;
        }

        .learn h2 {
          font-size: 3rem;
        }

        .learn ul {
          color: gray;
          font-size: 2rem;
          font-weight: bold;
          list-style-position: inside;
          list-style-type: square;
        }

        .learn li {
          margin: 20px 0;
        }

        .experience {
        }

        .experience h2 {
          margin: 0 30px;
          color: black;
          font-size: 3rem;
        }

        .experience ul {
          position: relative;
          margin: 10px 30px;
          color: rgb(159, 156, 156);
          font-size: 1.4rem;
          list-style-position: inside;
          list-style-type: square;
        }

        @media screen and (max-width:1200px) {
          .ability article {
            width: 100%;
          }
          @media screen and (max-width:500px) {
          .ability .descript {
            top: 0;
          }
        }
      `}</style>
    </>
  )
}
