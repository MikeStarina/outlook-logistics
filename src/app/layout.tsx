import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';



const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
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
      <body className={inter.className}>{children}</body>    
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


