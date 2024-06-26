import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

const Footer = (props) => {
  return (
    <>
      <footer className='footer-box'>
        <p className='footer-box__contact'>
          <a href='tel:314-279-5871'>
            <BsTelephoneFill className='footer-box__icon' />
            314-279-5871
          </a>
          <span>|</span>
          <a href='mailto:Katelynsansonetherapy@gmail.com'>
            <HiMail className='footer-box__icon mail-icon' />
            Katelynsansonetherapy@gmail.com
          </a>
        </p>
        <p className='footer-box__copyright'>
          Copyright © 2024 Katelyn Sansone - All rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
