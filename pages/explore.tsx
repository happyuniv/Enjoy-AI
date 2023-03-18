import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function explore() {
  return (
    <>
      <section className='intro'>
        <h1>
          <div>인공지능!?</div>
          <span>배우고.</span>
          <span>경험하고.</span>
          <span>즐기자</span>
        </h1>
        <h2>
          Enjoy AI는 웹에서 경험할 수 있는 다양한 인공지능을 소개합니다 {'\n'}
          최신 AI 기술들을 직접 사용해 보면서 쉽게 배워보세요
        </h2>
      </section>
      <section className='carousel'>
        <Carousel />
      </section>
      <section className='explore'>
        <div className='title'>🚀 탐험중</div>
        <div className='container-item'>
          <article className='item'>
            <Link href={'/chatbot'}>
              <div className='explore-img'>
                <Image src='/chatgpt-img.png' alt='' fill />
              </div>
            </Link>
            <div>
              <h3>챗봇</h3>
            </div>
            <p>채팅하면서 문맥을 이해하고 정보를 제공하는 대화형 인공지능</p>
          </article>
          <article className='item'>
            <Link href={'/image-generator'}>
              <div className='explore-img'>
                <Image src='/explore_generator-img.png' alt='' fill />
              </div>
            </Link>
            <div>
              <h3>이미지 생성기</h3>
            </div>
            <p>텍스트를 입력하면 이미지를 생성해주는 인공지능</p>
          </article>
          <article className='item'>
            <Link href={'/face-restore'}>
              <div className='explore-img'>
                <Image src='/explore_restore-img.png' alt='' fill />
              </div>
            </Link>

            <div>
              <h3>얼굴 이미지 복원</h3>
            </div>
            <p>흐릿한 얼굴을 선명하게 복원해주는 인공지능</p>
          </article>
        </div>
      </section>
      <section className='to-explore'>
        <div className='title'>🛸 탐험할것들</div>
        <div className='container-item'>
          <article className='item'>
            <div className='explore-img'>
              <Image src='/instruct-img.png' alt='' fill />
            </div>
            <div>
              <h3>이미지 지시</h3>
            </div>
            <p>
              이미지와 지시할 텍스트가 주어지면 그에 맞는 이미지를 생성하는
              인공지능
            </p>
            <div className='keyword'>
              <span>키워드&nbsp;</span>
              <span className='tag'>
                #InstructPix2Pix #GPT #Stable Diffusion{' '}
              </span>
            </div>
          </article>
          <article className='item'>
            <div className='explore-img'>
              <video src='/infinit_zoom.mp4' autoPlay loop muted />
            </div>
            <div>
              <h3>무한 확대</h3>
            </div>
            <p>텍스트를 입력하면 무한 확대 영상을 생성하는 인공지능</p>
            <div className='keyword'>
              <span>키워드&nbsp;</span>
              <span className='tag'>
                #Infinite Zoom #Stable Diffusion #Inpaint
              </span>
            </div>
          </article>
        </div>
      </section>

      <style jsx>{`
        .intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px 0;
        }
        .intro h1 {
          font-size: 5rem;
          text-align: center;
        }
        .intro h2 {
          margin: 20px 0;
          max-width: 650px;
          color: rgba(163, 163, 163, 0.701);
          font-size: 2rem;
          text-align: center;
          white-space: pre-line;
        }

        .carousel {
          margin: 50px 0;
        }

        .explore {
          padding: 30px;
        }

        .explore .title {
          font-size: 3rem;
          font-weight: 600;
        }
        .explore .container-item {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
        }

        .container-item .item {
          display: flex;
          flex-direction: column;
          padding: 20px 10px;
          width: 33%;
          text-align: center;
        }

        .item .explore-img {
          position: relative;
          width: 100%;
          height: 300px;
          background-color: white;
        }
        .item h3 {
          margin: 10px 0;
          font-size: 2rem;
        }
        .item p {
          color: var(--theme);
          font-size: 1.4rem;
          font-weight: bold;
        }

        .to-explore {
          padding: 30px;
        }

        .to-explore .title {
          font-size: 3rem;
          font-weight: 600;
        }

        .to-explore .container-item {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
        }
        .to-explore video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .to-explore .keyword {
          margin-top: 10px;
          font-size: 1.4rem;
          font-weight: bold;
        }
        .keyword .tag {
          color: lightgray;
        }

        @media screen and (max-width: 1000px) {
          .container-item .item {
            width: 50%;
          }
        }

        @media screen and (max-width: 800px) {
          .container-item .item {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
