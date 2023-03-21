import FaceRestore from '@/components/FaceRestore'
import Image from 'next/image'

export default function face_restore() {
  return (
    <>
      <div className='container'>
        <section className='intro'>
          <h1 className='title'>얼굴 이미지 복원 (Face Image Restoration)</h1>
          <div className='tag'>#흐린얼굴 #GAN #GFP-GAN #Img-to-Img</div>
          <h2>
            빛바랜 옛 사진의 얼굴도 방금 찍은 흐릿한 얼굴도 {'\n'}
            인공지능 앞에서 모두 평등하다...!
          </h2>
        </section>
        <section className='ability'>
          <h2>
            <Image src='/bot.svg' alt='logo' width={40} height={40} />
            &nbsp;뭘 할수 있는데?
          </h2>
          <div className='container-compare'>
            <div className='original'>
              <div className='title'>원본 이미지</div>
              <div className='wrapper'>
                <Image
                  src={'/face-restore-1.webp'}
                  alt='face'
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className='wrapper'>
                <Image
                  src={'/face-restore-3.webp'}
                  alt='face'
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className='restored'>
              <div className='title'>복원 이미지</div>
              <div className='wrapper'>
                <Image
                  src={'/face-restore-2.webp'}
                  alt='face'
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className='wrapper'>
                <Image
                  src={'/face-restore-4.webp'}
                  alt='face'
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='learn'>
          <h2>배우기</h2>
          <ul>
            <li>
              <span>GAN</span>
              <p>
                생성 모델중 하나로 생성자와 판별자 두 신경망이 적대적으로
                학습하여 가짜 데이터를 생성한다. 주로 이미지 생성에 활용된다.
              </p>
            </li>
            <li>
              <span>GFP-GAN</span>
              <p>
                미리 훈련된 GAN 모델을 활용한, 실제 세계 얼굴 이미지 복원을 위한
                모델
              </p>
            </li>
          </ul>
        </section>
        <section id='experience' className='experience'>
          <h2>경험하기</h2>
          <ul>
            <li>여기서 경험하는 인공지능은 GFP-GAN v1.4 모델을 사용합니다</li>
          </ul>
          <FaceRestore />
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

        .ability .container-compare {
          display: flex;
          justify-content: center;
          margin: 50px 0;
        }

        .container-compare .title {
          margin-top: 10px;
          color: var(--theme);
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
        }

        .container-compare .original {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container-compare .restored {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container-compare .wrapper {
          position: relative;
          margin: 30px 30px;
        }

        .ex {
          max-width: 100%;
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
          .ability .container-compare {
            flex-direction: column;
          }
          .container-compare .title {
            font-size: 1.6rem;
          }

          .learn li p {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  )
}
