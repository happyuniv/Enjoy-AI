import throttle from '@/utills/throttle'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    const toggleHeader = () => {
      if (document.body.clientHeight - scrollY < innerHeight + 10) {
        setHeaderVisible(false)
      } else setHeaderVisible(true)
    }

    const handleScroll = throttle(toggleHeader, 300)

    addEventListener('scroll', handleScroll)

    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header>
        <nav>
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <div className='logo'>
              <Image src='/logo.svg' alt='logo' width={32} height={32} />
              <span className='name'>Enjoy AI</span>
            </div>
          </Link>

          <>
            <div className='menu'>
              <Link href={'/explore'} style={{ textDecoration: 'none' }}>
                <span className='menu_item'>탐험하기</span>
              </Link>
              <div>
                <span
                  className='menu_item'
                  onClick={() => {
                    setDropDownVisible(!dropDownVisible)
                  }}
                >
                  경험하기
                </span>
                {dropDownVisible && (
                  <div
                    className='drop_down'
                    onMouseLeave={() => {
                      setDropDownVisible(false)
                    }}
                  >
                    <div>
                      <Link
                        href={'/chatbot#experience'}
                        target={'_blank'}
                        style={{ textDecoration: 'none' }}
                      >
                        <span>Chat GPT</span>
                        <Image
                          src='/new-tab.svg'
                          alt='new tab'
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={'/image-generator#experience'}
                        target={'_blank'}
                        style={{ textDecoration: 'none' }}
                      >
                        <span>이미지 생성기</span>
                        <Image
                          src='/new-tab.svg'
                          alt='new tab'
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href={'/face-restore#experience'}
                        target={'_blank'}
                        style={{ textDecoration: 'none' }}
                      >
                        <span>얼굴 이미지 복원</span>
                        <Image
                          src='/new-tab.svg'
                          alt='new tab'
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        </nav>
      </header>
      <style jsx>
        {`
          header {
            display: ${headerVisible ? 'block' : 'none'};
            position: fixed;
            width: 100%;
            border-bottom: 1px solid rgba(211, 211, 211, 0.553);
            background-color: rgba(255, 255, 255, 0.9);
            z-index: 1;
          }

          nav {
            display: flex;
            align-items: center;
            padding: 30px;
          }

          .logo {
            display: flex;
            align-items: center;
            letter-spacing: 1px;
            word-spacing: -3px;
          }
          .logo .name {
            margin-left: 5px;
            font-size: 2rem;
            font-weight: 600;
          }
          .logo .name:hover {
            color: var(--theme);
          }

          .menu {
            display: flex;
            align-items: center;
            position: relative;
            margin-left: auto;
            font-size: 2rem;
            font-weight: 600;
          }
          .menu .menu_item {
            margin: 0 10px;
          }
          .menu .menu_item:hover {
            cursor: pointer;
            color: var(--theme);
          }

          .drop_down {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            left: 0;
            margin-top: 10px;
            width: 100%;
            border: 1px solid rgba(211, 211, 211, 0.553);
            font-size: 1.6rem;
            font-weight: bold;
            background-color: white;
          }

          .drop_down div {
            padding: 10px;
            width: 100%;
            text-align: center;
          }
          .drop_down div:not(:first-child) {
            border-top: 1px solid rgba(211, 211, 211, 0.553);
          }
          .drop_down div:hover {
            cursor: pointer;
            background-color: var(--theme);
          }
          .drop_down div:hover span {
            color: white;
          }

          .drop_down span {
            margin-right: 10px;
            color: var(--theme);
          }

          @media screen and (max-width: 600px) {
            nav {
              flex-wrap: wrap;
              justify-content: center;
              padding: 20px;
            }

            .menu {
              justify-content: space-between;
              margin-top: 10px;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}
