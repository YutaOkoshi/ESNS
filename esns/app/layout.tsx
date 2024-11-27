import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './contexts/AuthContext'
import SessionProvider from "./provider/SessionProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SNS App',
  description: 'A social networking site application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

