import Recoil from '@/components/Recoil'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactQuery from '@/components/ReactQuery'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaebokchi',
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
        <Recoil>
          <ReactQuery>{children}</ReactQuery>
        </Recoil>
      </body>
    </html >
  )
}
