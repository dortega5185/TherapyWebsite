import Image from 'next/image'
import Link from 'next/link'

const Resources = (props) => {
  return (
    <>
      <section className='resources-content'>
        <div className='resources-content__page-title'>
          <h1>Resources</h1>
        </div>
        <p className='resources-content__sub-header'>
          If your need is of an urgent nature, please contact the resources
          below or go to your nearest emergency room.
        </p>
        <div className='resources-content__psychology-blocks'>
          <div className='resources-content__info-block'>
            <h5>Behavioral Health Response - St. Louis</h5>
            <Image
              className='resources-content__image'
              src='/img/bhr.png'
              width={500}
              height={300}
              alt='Sample photo for a resource'
            />
            <a className='resources-content__contact' href='tel:314-469-6644'>
              314-469-6644
            </a>
            <div className='resources-content__btn'>
              <Link href='https://bhrstl.org'>
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className='resources-content__info-block'>
            <h5>National Suicide Prevention Lifeline</h5>
            <Image
              className='resources-content__image'
              src='/img/crisis.png'
              width={500}
              height={300}
              alt='Sample photo for a resource'
            />
            <a className='resources-content__contact' href='tel:800-273-8255'>
              1-800-273-8255 OR 988
            </a>
            <div className='resources-content__btn'>
              <Link href='https://988lifeline.org'>
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className='resources-content__info-block'>
            <h5>The Trevor Project</h5>
            <Image
              className='resources-content__image'
              src='/img/trevor.png'
              width={500}
              height={300}
              alt='Sample photo for a resource'
            />
            <a className='resources-content__contact' href='tel:866-488-7386'>
              1-866-488-7386
            </a>
            <div className='resources-content__btn'>
              <Link href='https://www.thetrevorproject.org/get-help/'>
                <a>Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
