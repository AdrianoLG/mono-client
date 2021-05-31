import Month from '../components/home/Month'
import Favicon from '../components/Favicon'
import Navbar from '../components/header/Navbar'
import Head from 'next/head'
import '../styles/Home.module.css'
import Form from '../components/home/Form'

function Home() {
  return (
    <>
      <Head>
        <title>Mono</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <Favicon />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-body-bg h-screen">
        <Navbar />
        <div className="container">
          <main className="px-4 flex">
            <div className="left w-8/12">
              <Month />
              <Month />
              <Month />
            </div>
            <div className="w-1/12"></div>
            <div className="right w-3/12">
              <Form />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
