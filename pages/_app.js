import 'cross-fetch/polyfill';
import 'raf/polyfill'
import 'setimmediate'
import { AppProps } from "next/app";
import React from 'react'

global.setImmediate = requestAnimationFrame

const App: React.FC<AppProps<React.ReactNode>> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;