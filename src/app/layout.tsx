import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import TopButton from '@/components/topButton/top-button';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import ReduxProvider from '../redux/redux-provider';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('@/components/menu/menu'), { ssr: false })
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  verification: {
    yandex: 'df985d3636ebc81d',
    google: 'w2HyEYhhbDmEppg3hDL1YKutFFfbcddA0wQPxRkaGaI',
  }
}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <ReduxProvider>
          <body className={inter.className}>
            <Menu />
            <Header />
              {children}
            <TopButton />
            <Footer />
          </body>    
      </ReduxProvider>
      <Script
        async
        id='metrika-counter'
        strategy="afterInteractive"
      >
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(91973713, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
      });`}
      </Script>
    </html>
  )
}


