import Footer from '../UI/Footer/Footer'
import Header from '../UI/Header/Header'
import NavBar from '../UI/NavBar/NavBar'

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
