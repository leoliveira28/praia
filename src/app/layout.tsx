import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: 'Ubatuba 👙 :)',
  description: 'Bora pra praiaaa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

