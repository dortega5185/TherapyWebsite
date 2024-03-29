import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='color-overlay'>
        <div className='hero__container'>
          <h1>Provisionally Licensed Marriage & Family Therapist</h1>
          <h2>Healing is a choice.</h2>
          <p>
          Helping you improve your relationships, create better habits & find more balance
          </p>
          <div className='hero__btn-container'>
            <div className='hero__action-btn'>
              <Link href='/connect'>
                <a>Schedule a Consultation</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
