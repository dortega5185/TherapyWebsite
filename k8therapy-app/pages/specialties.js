import Accordion from '../Components/UI/Accordion/Accordion'

const Specialties = (props) => {
  return (
    <>
      <section className='specialties-content'>
        <div className='specialties-content__page-title'>
          <h1>Specialties</h1>
        </div>
        <div className='specialties-content__accordion-container'>
          <Accordion />
        </div>
      </section>
    </>
  )
}

export default Specialties
