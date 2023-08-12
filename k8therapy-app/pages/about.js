// import Image from 'next/image'
import Link from 'next/link'

const About = (props) => {
  return (
    // <>
    //   <section className='about-content'>
    //     <div className='about-content__page-title'>
    //       <h1>About Me</h1>
    //     </div>
    //     <section className='about-content__intro-w-pic'>
    //       <div className='about-content__left-content'>
    //         <div className='about-content__img-container'>
    //           <Image
    //             className='about-content__image'
    //             src='/img/portrait.jpg'
    //             // width={300}
    //             // height={350}
    //             // layout='fill'
    //             // objectFit='cover'
    //             width='100%'
    //             height='100%'
    //             layout='responsive'
    //             objectFit='cover'
    //             alt='Self-Portrait'
    //           />
    //         </div>
    //       </div>
    //       <aside className='about-content__right-content col-md-bruh'>
    //         <h2>Katelyn Sansone</h2>
    //         <p>
    //           Why is therapy so intimidating? Will it really help? Can someone
    //           really understand me? These themes come up frequently with
    //           individuals, couples, and families searching for resolution to
    //           behavioral or relational issues impacting their lives. You might
    //           be suffering from anxiety, depression, or interpersonal issues
    //           that are impacting your mood and daily functioning. You might feel
    //           invalidated or unheard in your relationships and struggle with
    //           communication. You might be wrestling with a sense of identity,
    //           direction, or hope for the future.
    //         </p>
    //         <p className='about-content__second-body'>
    //           Everyone can experience times of crisis and questioning their
    //           lives. You don&apos;t have to go through it alone. It is a sign of
    //           strength and courage to reach out for support during those times
    //           in our lives. Being vulnerable with others is an indicator of high
    //           self-esteem, acknowledging that your wants and needs are valid and
    //           important.
    //         </p>
    //       </aside>
    //     </section>
    //   </section>
    // </>
    <>
      <section className="about-content">
        <div className="about-content__portrait">
        <div className="about-content__inner-content-block">
          <span className="about-content__intro"><hr/> about me</span>
          <h2>Katelyn Sansone</h2>
          <span className="about-content__sub-headline">Provisionally Licensed Marriage & Family Therapist</span>
          <p>
            Why is therapy so intimidating? Will it really help? Can someone
            really understand me? These themes come up frequently with
            individuals, couples, and families searching for resolution to
            behavioral or relational issues impacting their lives. You might be
            suffering from anxiety, depression, or interpersonal issues that are
            impacting your mood and daily functioning. You might feel
            invalidated or unheard in your relationships and struggle with
            communication. You might be wrestling with a sense of identity,
            direction, or hope for the future.
          </p>
          <p className="about-content__second-body">
            Everyone can experience times of crisis and questioning their lives.
            You don&apos;t have to go through it alone. It is a sign of strength
            and courage to reach out for support during those times in our
            lives. Being vulnerable with others is an indicator of high
            self-esteem, acknowledging that your wants and needs are valid and
            important.
          </p>
          <Link href="/connect">
            <button>Book an Appointment</button>
          </Link>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default About
// #F5F1F0