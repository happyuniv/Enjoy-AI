import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section>
        <div className='outlay'></div>
        <video src='/main.mp4' autoPlay loop muted />

        <div className='intro'>
          <h1>
            AI는 이미 우리와 함께입니다{'\n'}
            더욱 가까워지는 AI를 쉽게 경험하고 배워보세요!
          </h1>
          <Link href={'/explore'} style={{ textDecoration: 'none' }}>
            <button className='link-explore'>탐험하기</button>
          </Link>
        </div>
      </section>

      <style jsx>
        {`
          section {
            width: 100vw;
            max-width: 100%;
            height: 100vh;
            color: white;
            overflow-y: hidden;
          }

          .outlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #0000004f;
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .intro {
            position: absolute;
            left: 3%;
            bottom: 5%;
            width: 45vw;
            font-size: 2.5rem;
            font-weight: 300;
            white-space: pre-line;
          }

          h1 {
            text-align: center;
            font-size: 2.8rem;
            font-weight: 500;
          }

          .link-explore {
            display: block;
            margin: 15px auto;
            padding: 10px;
            width: 80%;
            border: 1px solid lightgray;
            border-radius: 10px;
            color: white;
            font-size: 2rem;
            background-color: black;
            transition: all 0.5s;
          }

          .link-explore:hover {
            cursor: pointer;
            color: black;
            background-color: white;
          }

          @media screen and (max-width: 900px) {
            .intro {
              left: 50%;
              width: 80%;
              transform: translateX(-50%);
            }
            h1 {
              font-size: 2.5rem;
            }
          }

          @media screen and (max-width: 600px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </>
  )
}
