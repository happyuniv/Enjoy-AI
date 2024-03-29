import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/' && <Header />}
      <main>{children}</main>

      <style jsx global>
        {`
          :root {
            --theme: rgb(133, 28, 225);
          }

          html {
            font-size: 62.5%;
          }
          body {
            min-width: 280px;
            min-height: 100vh;
            background: ${router.pathname === '/explore'
              ? `linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.88) 0%,
                rgba(203, 249, 241, 0.57) 50%,
                rgba(255, 255, 255, 0.88)
              )
              no-repeat;`
              : `linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.88) 0%,
                rgba(203, 249, 241, 0.2) 50%,
                rgba(255, 255, 255, 0.88)
              )
              no-repeat;`};
          }
          main {
            padding-top: ${router.pathname === '/' ? '0' : '92px'};
          }
        `}
      </style>
    </>
  )
}
