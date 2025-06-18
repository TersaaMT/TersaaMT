import './globals.css'
import { Inter } from 'next/font/google'
import BottomNav from '@/BottomNavFix';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TersaaMT MiniApp',
  description: 'WebApp для стратегий',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
