import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [sideNavOpen, setSideNavOpenAction] = useState(false)
  const router = useRouter()
  return (
    <>
      <header className='top-header'>
        <div className='top-header__logo'>
          <Link href='/'>
            <a className='top-header__logo-text'>
              {/* <Image src='/img/logo2.png' height={350} width={350} /> */}
              Katelyn Sansone
            </a>
          </Link>
        </div>
        <div
          className='top-header__menu-btn'
          onClick={() => setSideNavOpenAction(!sideNavOpen)}
        >
          <FaBars />
        </div>
        <nav className='top-header__nav'>
          <ul
            className={`top-header__navlist ${
              sideNavOpen ? 'top-header--menu-open' : ''
            }`}
          >
            <li className='top-header__nav-li'>
              <Link href='/about'>
                <a className={router.pathname == '/about' ? 'active' : ''}>
                  About
                </a>
              </Link>
            </li>
            <li className='top-header__nav-li'>
              <Link href='/specialties'>
                <a
                  className={router.pathname == '/specialties' ? 'active' : ''}
                >
                  Specialties
                </a>
              </Link>
            </li>
            <li className='top-header__nav-li'>
              <Link href='/resources'>
                <a className={router.pathname == '/resources' ? 'active' : ''}>
                  Resources
                </a>
              </Link>
            </li>
            <li className='top-header__nav-li'>
              <Link href='/faq'>
                <a className={router.pathname == '/faq' ? 'active' : ''}>FAQ</a>
              </Link>
            </li>
            <li className='top-header__nav-li'>
              <Link href='/connect'>
                <a className={router.pathname == '/connect' ? 'active' : ''}>
                  Connect
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
