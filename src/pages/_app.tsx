import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

function AppHead() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : undefined;

  return (
    <Head>
      <title>Millionaire game</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.webp"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.webp"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.webp"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta property="og:title" content="Millionaire game" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
    </Head>
  );
}

export default function CustomApp({
  Component,
  pageProps,
}: AppProps) {
  const route = useRouter();

  return (
    <div className={inter.className} style={{ height: '100%', minHeight: '100vh' }}>
      <AppHead />
      <Component {...pageProps} key={route.route} />
    </div>
  );
}
