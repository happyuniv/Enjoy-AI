import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <>
      <header>
        <nav>
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <div className='logo'>
              <Image src='/logo.svg' alt='logo' width={32} height={32} />
              <span>Enjoy AI</span>
            </div>
          </Link>
        </nav>
      </header>
      <style jsx>
        {`
          header {
            position: ${router.pathname === '/' ? 'absolute' : 'static'};
            padding: ${router.pathname === '/' ? '0' : '20px 0'};
            top: 20px;
            z-index: 1;
          }

          nav {
            display: flex;
            align-items: center;
            padding: 10px 30px;
          }

          .logo {
            display: flex;
            align-items: center;
            color: ${router.pathname === '/' ? 'white' : 'black'};
            letter-spacing: 1px;
            word-spacing: -3px;
          }

          span {
            margin-left: 5px;
            font-size: 2rem;
            font-weight: 600;
            text-decoration: 'none';
          }
        `}
      </style>
    </>
  )
}
