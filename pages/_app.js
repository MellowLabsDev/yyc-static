import React, { useEffect } from 'react';
import '../styles/main.scss'
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-medium-image-zoom/dist/styles.css'
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) { 
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-1W80PK42W8`} />

      <Script id='gtag1' strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1W80PK42W8', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-1W80PK42W8"></Script>
      <Script id='gtag2' strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1W80PK42W8');
        `}
      </Script>
      <Script id='ttag1' strategy="lazyOnload">
      {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      // Insert Twitter Pixel ID and Standard Event data below
      twq('init','o9bdq');
      twq('track','PageView');`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

