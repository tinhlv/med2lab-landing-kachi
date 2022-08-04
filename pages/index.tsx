import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import MainPage from './MainPage'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Med2Lab Case Simulation</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <div className="main-content">
        <MainPage />
      </div>
      <Footer />
    </div>
  )
}

export default Home
