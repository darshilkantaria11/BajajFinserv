
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {



  return (
    <>
      <Head>
        <title>Bajajfinserv</title>
      </Head>
     
      <Component {...pageProps} />
      
    </>
  );
}
