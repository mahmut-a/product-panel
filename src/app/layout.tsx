import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ürün Bilgilendirme Paneli',
  description: 'Ürün bilgilerini görüntülemek için minimalist ve sade bir bilgilendirme paneli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', savedTheme === 'dark');
              } catch (e) {
                console.error('Tema ayarlanırken bir hata oluştu:', e);
                document.documentElement.classList.add('dark');
              }
            })()
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
} 