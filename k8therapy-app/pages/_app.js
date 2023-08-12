import MainLayout from '../Components/Layouts/MainLayout'
import HomeLayout from '../Components/Layouts/HomeLayout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/about')) {
    return (
      <MainLayout>
        <Head>
          <title>Katelyn Sansone - About</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/specialties')) {
    return (
      <MainLayout>
        <Head>
          <title>Katelyn Sansone - Specialties</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/resources')) {
    return (
      <MainLayout>
        <Head>
          <title>Katelyn Sansone - Resources</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/faq')) {
    return (
      <MainLayout>
        <Head>
          <title>Katelyn Sansone - FAQ</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/connect')) {
    return (
      <MainLayout>
        <Head>
          <title>Katelyn Sansone - Connect</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  return (
    <HomeLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
