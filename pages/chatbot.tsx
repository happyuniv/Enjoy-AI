import Image from 'next/image'

export default function chatbot() {
  return (
    <>
      <section className='intro'>
        <h2 className='title'>챗봇 (Chat Bot)</h2>
        <div className='tag'>#챗봇 #챗GPT #ChatGPT #GPT3</div>
      </section>
      <section className='learn'>
        <h3>배우기</h3>
        <div className='subject'>챗봇: 대화형 봇</div>
        <div className='subject'>GPT: 대화형 봇</div>
        <div className='subject'>GPT3: 대화형 봇</div>
        <div className='subject'>
          ChatGPT: OpenAI에서 개발하고 있는 GPT 3.5 기반 챗봇
        </div>
      </section>

      <section className='experience'>
        <h3>경험하기</h3>
        <div className='descript'>
          여기서 경험하는 인공지능은 OpenAI에서 제공하는 GPT 3 기반의 text-davinchi
          모델을 사용합니다
        </div>
        <div className='example'>사용예시 : ~해줘 ~해줘</div>
        <div className='container-chatbot'>
          <div className='container-chat'>
            <div className="wrapper">

            <div className='container-message'>
              <div className='profile'>
                <Image src='/logo.svg' alt='logo' width={32} height={32} />
              </div>
              <div className='message'>aaaaaaaaaaa</div>
            </div>
            </div>
            <div className='wrapper ai'>
              <div className='container-message'>
                <div className='profile'>
                  <Image src='/logo.svg' alt='logo' width={32} height={32} />
                </div>
                <div className='message'>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
              </div>
            </div>
            <div className='wrapper'>
              <div className='container-message'>
                <div className='profile'>
                  <Image src='/logo.svg' alt='logo' width={32} height={32} />
                </div>
                <div className='message'>aaaaaaaaaaa</div>
              </div>
            </div>
          </div>
          <form>
            <div className="container-input">

            <input type='text' placeholder='type text here' />
            <button>submit</button>
            </div>
          </form>
        </div>
      </section>

      <style jsx>{`
        .intro {
          padding: 30px;
        }
        .intro h2 {
          font-size: 5rem;
        }

        .intro .tag {
          margin-top: 10px;
          color: lightgray;
          font-size: 1.4rem;
          font-weight: bold;
        }

        .learn {
          padding: 30px;
        }

        .learn h3 {
          font-size: 3rem;
        }

        .learn .subject {
          margin: 20px 0;
          color: gray;
          font-size: 2rem;
          font-weight: bold;
        }

        .experience {
        }

        .experience h3 {
          margin: 0 30px;
          font-size: 3rem;
        }

        .experience .descript {
          margin: 10px 30px;
          color: rgb(159, 156, 156);
          font-size: 2rem;
        }

        .experience .example {
          margin: 30px 30px;
          font-size: 2rem;

        }

        .container-chatbot {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          background-color: rgba(62, 60, 60, 0.558);
        }
        .container-chat {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          color: white;
 

          overflow-y: auto;
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
          width: 80%;
        }
        input {
          padding: 20px;
          width: 100%;
          font-size: 18px;

          border: 1px solid lightgray;
          border-radius: 50px;
          background-color: white;
          box-shadow: 0 0 5px rgba(189, 232, 240, 0.979);;
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
      `}</style>
    </>
  )
}
