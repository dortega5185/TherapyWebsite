import MainLayout from '../Components/Layouts/MainLayout'
import HomeLayout from '../Components/Layouts/HomeLayout'
import '../styles/styles.scss'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/about')) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/specialties')) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/resources')) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/faq')) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  if (router.pathname.startsWith('/connect')) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
