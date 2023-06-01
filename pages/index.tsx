import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import MainPage from './MainPage'
// import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kachi Health | Unlocking Value in Chronic Disease Management</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PB3SQG5');`,
          }}
        />
      </Head>
      <Navbar />
      <div className="main-content">
        <MainPage />
      </div>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PB3SQG5" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
