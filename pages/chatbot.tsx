import Chatbot from '@/components/Chatbot'
import Image from 'next/image'

export default function chatbot() {
  return (
    <>
      <div className='container'>
        <section className='intro'>
          <h1 className='title'>Chat GPT</h1>
          <div className='tag'>#챗봇 #GPT4 #Text-to-Text</div>
          <h2>
            검색부터 번역 공부 코딩까지! {'\n'} 다재다능한 AI와 대화해보자!
          </h2>
        </section>
        <section className='ability'>
          <h2>
            <Image src='/bot.svg' alt='logo' width={40} height={40} />
            &nbsp;뭘 할수 있는데?
          </h2>
          <div className='container-img'>
            <article>
              <div className='wrapper'>
                <Image
                  src={'/chatbot-1.png'}
                  alt=''
                  fill
                  style={{
                    border: '1px solid lightgray',
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
                    border: '1px solid lightgray',
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
                    border: '1px solid lightgray',
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
                    border: '1px solid lightgray',
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
            <li>
              <span>Chat GPT</span>
              <p>OpenAI에서 개발한 GPT-3.5 기반 인공지능 모델</p>
            </li>
            <li>
              <span>챗봇</span>
              <p>인공지능 대화형 서비스. 채팅(Chat)+로봇(Bot) 을 합친말</p>
            </li>
            <li>
              <span>GPT</span>
              <p>OpenAI에서 개발한 언어모델</p>
            </li>
            <li>
              <span>GPT-4</span>
              <p>
                OpenAI에서 2023.3.14일 출시한 GPT-3.5 버전에서 향상된 GPT의
                버전4
              </p>
            </li>
          </ul>
        </section>
        <section className='experience'>
          <div className='wrapper'>
            <h2>경험하기</h2>
            <ul>
              <li>
                여기서 경험하는 인공지능은 OpenAI에서 제공하는 ChatGPT 모델을
                사용합니다
              </li>
              <li>
                모델에 사용된 데이터는 2021년 9월 까지로 현재 사건들을 반영하지
                않습니다
              </li>
            </ul>
          </div>
          <Chatbot />
        </section>
      </div>
      <style jsx>{`
        .container {
        }

        section:not(:last-child) {
          padding: 0 30px;
        }
        
        .intro {
          padding-top: 30px !important;
          background: linear-gradient(
            to bottom left,
            rgba(203, 249, 241, 0.147) 30%,
            white
          );
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
          color: var(--theme);
          font-size: 4rem;
          white-space: pre-line;
        }

        .ability {
          margin: 50px 0;
        }

        .ability h2 {
          display: flex;
          align-items: center;
          font-size: 3rem;
        }

        .ability .container-img {
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
          position: relative;
          width: 100%;
          height: 500px;
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
          margin: 50px 0;
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
        .learn li p {
          margin-top: 5px;
        }

        .learn li span {
          color: var(--theme);
        }

        .experience {
        }

        .experience .wrapper {
          padding: 0 30px;
        }

        .experience h2 {
          color: black;
          font-size: 3rem;
        }

        .experience ul {
          position: relative;
          margin: 10px 0;
          color: rgb(159, 156, 156);
          font-size: 1.4rem;
          list-style-position: inside;
          list-style-type: square;
        }

        @media screen and (max-width: 1200px) {
          .ability article {
            width: 100%;
          }
        }
        @media screen and (max-width: 900px) {
          .intro .title {
            font-size: 3.2rem;
            text-align: center;
          }
          .intro .tag {
            text-align: center;
          }
          .intro h2 {
            font-size: 2.5rem;
            text-align: center;
          }
          
          .learn li {
            text-align: center;
          }
          .learn li p {
            font-size: 1.6rem;
          }
        }
        @media screen and (max-width: 600px) {  
          .intro .title {
            font-size: 3rem;
            white-space: pre-line;
          }
          .intro h2 {
            font-size: 2rem;
          }
          .ability h2 {
            font-size: 2rem;
          }
          .ability h3 {
            font-size: 1.6rem;
          }
          .ability .descript {
            font-size: 1.6rem;
          }
          .learn li p {
            font-size: 1.4rem;
          }
        @media screen and (max-width: 500px) {
          .ability .descript {
            top: 0;
          }
        }
      `}</style>
    </>
  )
}
