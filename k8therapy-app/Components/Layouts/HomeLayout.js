import Footer from '../UI/Footer/Footer'
import Header from '../UI/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <div className='home-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
