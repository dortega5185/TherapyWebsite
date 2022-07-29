import { BsPeople, BsGenderAmbiguous } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiFamilyHouse } from 'react-icons/gi'
import Link from 'next/link'

const SpecialtiesInfo = () => {
  return (
    <>
      <section className='specialties-info'>
        <div className='specialties-info__icon-container'>
          <BsPeople className='specialties-info__icon' />
          <h5>Relationship Dynamics</h5>
        </div>
        <div className='specialties-info__icon-container border-both-sides'>
          <GiFamilyHouse className='specialties-info__icon' />
          <h5>Family Functioning</h5>
        </div>
        <div className='specialties-info__icon-container border-right-side'>
          <BsGenderAmbiguous className='specialties-info__icon' />
          <h5>Identity Exploration</h5>
        </div>
        <div className='specialties-info__icon-container'>
          <AiOutlineHeart className='specialties-info__icon' />
          <h5>Intimacy Issues</h5>
        </div>
      </section>
      <div className='specialties-info__btn-container'>
        <div className='specialties-info__btn'>
          <Link href='/specialties'>
            <a>Learn More</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SpecialtiesInfo
