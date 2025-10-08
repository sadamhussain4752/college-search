import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CollegeSearch - Discover and Find the Best Right College',
  description: 'Find the perfect college for your future. Search through thousands of colleges and courses across India.',
  keywords: 'college search, education, courses, MBA, engineering, medical, law, India colleges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
