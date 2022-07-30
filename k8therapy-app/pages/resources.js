import Image from 'next/image'

const Resources = (props) => {
  return (
    <>
      <section className='resources-content'>
        <div className='resources-content__page-title'>
          <h1>Resources</h1>
        </div>
        <div className='resources-content__psychology-blocks'>
          <div className='resources-content__info-block'>
            <Image
              className='resources-content__image'
              src='/img/sampleRes2.jpg'
              width={400}
              height={300}
              alt='Sample photo for a resource'
            />
            <h5>BHR</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              consectetur, quasi?
            </p>
          </div>
          <div className='resources-content__info-block'>
            <Image
              className='resources-content__image'
              src='/img/sampleRes.jpg'
              width={400}
              height={300}
              alt='Sample photo for a resource'
            />
            <h5>Life-Crisis</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              consectetur, quasi?
            </p>
          </div>
          <div className='resources-content__info-block'>
            <Image
              className='resources-content__image'
              src='/img/sampleRes3.jpg'
              width={400}
              height={300}
              alt='Sample photo for a resource'
            />
            <h5>Trevor-Project</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              consectetur, quasi?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
