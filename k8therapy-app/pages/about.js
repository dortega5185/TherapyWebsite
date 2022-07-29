import Image from 'next/image'

const About = (props) => {
  return (
    <>
      <section className='about-content'>
        {/* <div className='about-content__header-bg-img'> */}
        {/* <div className='cover-overlay'> */}
        <div className='about-content__page-title'>
          <h1>About Me</h1>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* <div className='about-content__width-container'> */}
        <section className='about-content__intro-w-pic'>
          <div className='about-content__left-content'>
            <div className='about-content__img-container'>
              <Image
                className='about-content__image'
                src='/img/portraitSample.jpg'
                width={300}
                height={400}
                alt='Self-Portrait'
              />
            </div>
          </div>
          <aside className='about-content__right-content col-md-8'>
            <h2>Katelyn Sansone</h2>
            <p>
              Why is therapy so intimidating? Will it really help? Can someone
              really understand me? These themes come up frequently with
              individuals, couples, and families searching for resolution to
              behavioral or relational issues impacting their lives. You might
              be suffering from anxiety, depression, or interpersonal issues
              that are impacting your mood and daily functioning. You might feel
              invalidated or unheard in your relationships and struggle with
              communication. You might be wrestling with a sense of identity,
              direction, or hope for the future.
            </p>
            <p>
              Everyone can experience times of crisis and questioning their
              lives. You don’t have to go through it alone. It is a sign of
              strength and courage to reach out for support during those times
              in our lives. Being vulnerable with others is an indicator of high
              self-esteem, acknowledging that your wants and needs are valid and
              important.
            </p>
            {/* <p className='sample'>
              One of the key components of effective therapy is ensuring the
              relationship between client and therapist feels right. We will
              work collaboratively to identify concerns in your life causing
              distress and to evaluate effective strategies to move you forward.
              Our sessions will be tailored to you. I believe you are the expert
              of your own life, and I will work to help facilitate discovery,
              understanding, change, and/or acceptance in a way that is most
              comfortable for you, starting wherever you are. Whereas I do not
              take a "one size fits all" approach with my clients, my practice
              is informed by evidence-based techniques, including
              solution-focused therapy, motivational interviewing, and cognitive
              behavioral therapy (CBT).
            </p> */}
          </aside>
        </section>
        {/* </div> */}
      </section>
    </>
  )
}

export default About
