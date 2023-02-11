import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <Image src='/logo.svg' alt='logo' width={32} height={32} />
            <span>enjoy AI</span>
          </div>
        </nav>
      </header>
      <style jsx>
        {`
          nav {
            position: absolute;
            top: 20px;
            z-index: 1;
          }

          .logo {
            display: flex;
            align-items: center;
            padding: 10px 30px;
            letter-spacing: 1px;
            word-spacing: -3px;
          }

          span {
            margin-left: 5px;
            color: white;
            font-size: 20px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}
