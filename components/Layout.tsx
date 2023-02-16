import { PropsWithChildren } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <style jsx global>
        {`
          html {
            font-size: 62.5%;
          }
          body {
            min-height: 100vh;
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.88) 0%,
                rgba(203, 249, 241, 0.57) 91.67%
              )
              no-repeat;
          }
        `}
      </style>
    </>
  )
}
