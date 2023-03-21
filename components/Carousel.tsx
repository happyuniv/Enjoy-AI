import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Carousel() {
  const TOTAL_INDEX = 3
  const WIDTH = 900
  const containerItem = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout>()
  const [index, setIndex] = useState(1)

  useEffect(() => {
    timer.current = setTimeout(handleNext, 5000)
    return () => {
      clearTimeout(timer.current)
    }
  }, [index])

  const handlePrev = () => {
    if (containerItem.current) {
      if (index === 1) {
        setIndex(TOTAL_INDEX)
        containerItem.current.style.transition = `0s`
        containerItem.current.style.transform = `translateX(${
          -100 * (TOTAL_INDEX + 1)
        }%)`
        setTimeout(() => {
          containerItem.current!.style.transition = `1s`
          containerItem.current!.style.transform = `translateX(${
            -100 * TOTAL_INDEX
          }%)`
        }, 0)
      } else {
        setIndex(index - 1)
        containerItem.current.style.transition = `1s`
        containerItem.current.style.transform = `translateX(${
          -100 * (index - 1)
        }%)`
      }
    }
  }

  const handleNext = () => {
    if (containerItem.current) {
      if (index === TOTAL_INDEX) {
        setIndex(1)
        containerItem.current.style.transition = `0s`
        containerItem.current.style.transform = `translateX(${0}px)`
        setTimeout(() => {
          containerItem.current!.style.transition = `1s`
          containerItem.current!.style.transform = `translateX(-100%)`
        }, 0)
      } else {
        setIndex(index + 1)
        containerItem.current.style.transition = `1s`
        containerItem.current.style.transform = `translateX(${
          -100 * (index + 1)
        }%)`
      }
    }
  }

  const handleEnter = () => {
    clearTimeout(timer.current)
  }

  const handleLeave = () => {
    timer.current = setTimeout(handleNext, 3000)
  }

  return (
    <>
      <div className='container'>
        <div className='window'>
          <button className='prev' onClick={handlePrev}>
            <Image src={'/prev.svg'} alt='prev' width={48} height={80} />
          </button>
          <div
            className='container-item'
            ref={containerItem}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <article className='item'>
              <div className='left'>
                <h3 className='title'>얼굴 이미지 복원</h3>
                <div className='tag'>#흐린얼굴 #GAN #GFP-GAN #Img-to-Img</div>
                <p className='descript'>
                  오래된 사진이 새로운 사진으로! {'\n'}
                  흐릿한 얼굴을 선명하게 복원해주는 인공지능
                </p>
                <Link href={'/face-restore'}>
                  <button>탐험하기</button>
                </Link>
              </div>
              <div className='right'>
                <Image src='/restore-img.png' alt='' fill />
              </div>
            </article>
            <article className='item'>
              <div className='left'>
                <h3 className='title'>Chat GPT</h3>
                <div className='tag'>#챗봇 #GPT4 #Text-to-Text</div>
                <p className='descript'>
                  요즘 ChatGPT가 핫하다던데... {'\n'} 채팅하면서 문맥을 이해하고
                  정보를 제공하는 대화형 인공지능
                </p>
                <Link href={'/chatbot'}>
                  <button>탐험하기</button>
                </Link>
              </div>

              <div className='right'>
                <video src='/chatgpt.mp4' autoPlay loop muted />
              </div>
            </article>
            <article className='item'>
              <div className='left'>
                <h3 className='title'>이미지 생성기</h3>
                <div className='tag'>
                  #Stable Diffusion #DALL-E #노벨AI #Text-to-Img
                </div>
                <p className='descript'>
                  생각을 현실로? {'\n'} 텍스트를 입력하면 이미지를 생성해주는
                  인공지능
                </p>
                <Link href={'/image-generator'}>
                  <button>탐험하기</button>
                </Link>
              </div>
              <div className='right'>
                <Image src='/generator-img.png' alt='' fill />
              </div>
            </article>
            <article className='item'>
              <div className='left'>
                <h3 className='title'>얼굴 이미지 복원</h3>
                <div className='tag'>#흐린얼굴 #GAN #GFP-GAN #Img-to-Img</div>
                <p className='descript'>
                  오래된 사진이 새로운 사진으로! {'\n'}
                  흐릿한 얼굴을 선명하게 복원해주는 인공지능
                </p>
                <Link href={'/face-restore'}>
                  <button>탐험하기</button>
                </Link>
              </div>
              <div className='right'>
                <Image src='/restore-img.png' alt='' fill />
              </div>
            </article>

            <article className='item'>
              <div className='left'>
                <h3 className='title'>Chat GPT</h3>
                <div className='tag'>#챗봇 #GPT4 #Text-to-Text</div>
                <p className='descript'>
                  요즘 ChatGPT가 핫하다던데... {'\n'} 채팅하면서 문맥을 이해하고
                  정보를 제공하는 대화형 인공지능
                </p>
                <Link href={'/'}>
                  <span className='link-experience'>경험하기</span>
                </Link>
              </div>
              <div className='right'>
                <Image src='/chatgpt-img.png' alt='' fill />
              </div>
            </article>
          </div>
          <button className='next' onClick={handleNext}>
            <Image src={'/next.svg'} alt='prev' width={48} height={80} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
        }

        .window {
          margin: 0 auto;
          width: ${WIDTH}px;
          border-radius: 10px;
          background-color: white;
          overflow: hidden;
        }

        .prev {
          position: absolute;
          top: 50%;
          left: 15px;
          border: none;
          background-color: transparent;
          transform: translateY(-50%);
          opacity: 0.3;
          z-index: 1;
        }
        .prev:hover {
          cursor: pointer;
          opacity: 1;
        }

        .next {
          position: absolute;
          top: 50%;
          right: 5px;
          outline: none;
          border: none;
          background-color: transparent;
          transform: translateY(-50%);
          opacity: 0.3;

          z-index: 1;
        }
        .next:hover {
          cursor: pointer;
          opacity: 1;
        }

        .container-item {
          display: flex;
          transform: translateX(-100%);
        }

        .container-item .item {
          display: flex;
          flex-shrink: 0;
          width: ${WIDTH}px;
        }

        .item .left {
          flex: 2;
          padding: 50px;
           {
            /* border-right: 1px solid lightgray; */
          }
        }
        .left .title {
          font-size: 3rem;
        }
        .left .tag {
          margin-top: 10px;
          color: lightgray;
          font-size: 1.4rem;
          font-weight: bold;
        }
        .left .descript {
          margin: 30px 0;
          color: gray;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.5;
          white-space: pre-line;
        }
        .left button {
          margin-top: 15px;
          padding: 10px;
          width: 100%;
          border: none;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          background-color: var(--theme);
          transition: all 1s;
        }
        .left button:hover {
          cursor: pointer;
          color: var(--theme);
          background-color: white;
        }

        .item .right {
          flex: 3;
          position: relative;
          margin: 0 1px;
        }
        .right video {
          max-width: 100%;
          height: auto;
        }

        @media screen and (max-width: 1000px) {
          .window {
            width: 80%;
          }

          .container-item .item {
            flex-direction: column;
            flex-basis: 100%;
          }

          .item .left {
             {
              /* border-bottom: 1px solid lightgray; */
            }
          }
        }

        @media screen and (max-width: 600px) {
          .item .title {
            font-size: 2.5rem;
          }
          .item .tag {
            font-size: 1.2rem;
          }
          .item .descript {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  )
}
