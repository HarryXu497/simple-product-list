import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Grigorov\'s Tie Emporium',
	description: "Ties! Ties! Ties!\nWe have it all here at Grigorov\'s Tie Emporium™.\nWhichever tie you need, we have it!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
