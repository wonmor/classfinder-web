import { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
