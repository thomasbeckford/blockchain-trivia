import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/providers'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain Trivia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(100,100,100,0.2) 0%, rgba(200,200,200,0.7) 50%, rgba(255,255,255,0.9) 100%)',
              minHeight: 'calc(100vh - 64px - 64px)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
