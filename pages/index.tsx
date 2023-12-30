import type { NextPage } from 'next'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import MainScreen from '../components/MainScreen'

const Home: NextPage = () => {
  const {isAuthenticated} = useMoralis()
  if(!isAuthenticated) return <Login />
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MetaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainScreen />

    </div>
  )
}

export default Home
