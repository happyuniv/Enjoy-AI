import ImageGenerator from '@/components/ImageGenerator'
import Image from 'next/image'

export default function image_generator() {
  return (
    <>
      <div className='container'>
        <section className='intro'>
          <h1 className='title'>이미지 생성기 {'\n'}(Image Generator)</h1>
          <div className='tag'>#Stable Diffusion #노벨AI #DALL-E</div>
          <h2>
            사진 예술작품 드론뷰 인테리어 우주 등등.. {'\n'}
            상상하는 모든 이미지를 생성한다!
          </h2>
        </section>
        <section className='ability'>
          <h2>
            <Image src='/bot.svg' alt='logo' width={40} height={40} />
            &nbsp;뭘 할수 있는데?
          </h2>
          <h3>AI가 생성한 이미지</h3>
          <div className='container-img'>
            <article>
              <Image src={'/img-generator-1.webp'} alt='' fill style={{}} />
            </article>
            <article>
              <Image src={'/img-generator-2.webp'} alt='' fill style={{}} />
            </article>
            <article>
              <Image src={'/img-generator-3.webp'} alt='' fill style={{}} />
            </article>
            <article>
              <Image src={'/img-generator-4.webp'} alt='' fill style={{}} />
            </article>
            <article>
              <Image src={'/img-generator-5.webp'} alt='' fill style={{}} />
            </article>
            <article>
              <Image src={'/img-generator-6.webp'} alt='' fill style={{}} />
            </article>
            <article className='single'>
              <Image src={'/img-generator-7.webp'} alt='' fill style={{}} />
            </article>
            <article className='single'>
              <Image src={'/img-generator-8.webp'} alt='' fill style={{}} />
            </article>
            <article className='single'>
              <Image src={'/img-generator-9.webp'} alt='' fill style={{}} />
            </article>
            <article className='single'>
              <Image src={'/img-generator-10.webp'} alt='' fill style={{}} />
            </article>
          </div>
        </section>
        <section className='learn'>
          <h2>배우기</h2>
          <ul>
            <li>
              <span>Stable Diffusion</span>
              <p>
                Stability AI에서 개발한 이미지 생성 모델. 모델을 오픈 소스로
                공개하면서 이를 기반으로 한 다양한 모델들이 생겨 이미지 생성
                인공지능의 큰 발전이 이루어졌다.
              </p>
            </li>
            <li>
              <span>노벨 AI</span>
              <p>
                Stable Diffusion 기반의 모델로 danboru 사이트의 이미지들을
                크롤링하여 학습시켜 만화/애니메이션 이미지를 생성하는데
                특화되어있다.
              </p>
            </li>
          </ul>
        </section>
        <section id='experience' className='experience'>
          <h2>경험하기</h2>
          <ul>
            <li>
              여기서 경험하는 인공지능은 Stable Diffusion v2.1 모델을 사용합니다
            </li>
          </ul>
          <ImageGenerator />
        </section>
      </div>

      <style jsx>{`
        .container {
        }

        section {
          padding: 0 30px;
        }

        .intro {
          padding-top: 30px;
          background: linear-gradient(
            to bottom left,
            rgba(203, 249, 241, 0.147) 30%,
            white
          );
        }
        .intro .title {
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

        .ability h3 {
          margin: 20px 0;
          color: var(--theme);
          font-size: 2rem;
          text-align: center;
        }

        .ability .container-img {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .ability article {
          display: flex;
          position: relative;
          width: 50%;
          min-height: 200px;
          border: 1px solid lightgray;
        }

        .ability .single {
          min-height: 500px;
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

        .learn li span {
          color: var(--theme);
        }
        .learn li p {
          margin-top: 5px;
        }

        .experience {
          margin: 30px 0;
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
          .ability article {
            width: 100%;
            padding-top: 50%;
          }
          .ability .single {
            min-height: 300px;
          }

          .learn li p {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  )
}
