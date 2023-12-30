import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <MoralisProvider appId="RuQ9lJxfknmso267kZur08Mlb92F12yBH01wD70X" serverUrl="https://udt8dircgkaz.usemoralis.com:2053/server">
       <Component {...pageProps} />
      </MoralisProvider>
  )
  
}

export default MyApp
