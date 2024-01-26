import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
