import Contact from '../Components/UI/Contact/Contact'

const Connect = (props) => {
  return (
    <>
      <section className='connect-content'>
        <div className='connect-content__page-title'>
          <h1>Connect With Me</h1>
        </div>
        <div className='connect-content__contact-form'>
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Connect
