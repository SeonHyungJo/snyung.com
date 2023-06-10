import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'

const inter = Noto_Sans_KR({ 
  weight: ['300', '400', '700', '900'], 
  preload: true, 
  display: 'swap',
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
