import AccordionLogic from './AccordionLogic'
import { accordionData } from '../../../utils/accordionData'

const Accordion = () => {
  return (
    <>
      <section className='accordion'>
        {accordionData.map(({ title, content }) => (
          <AccordionLogic title={title} content={content} />
        ))}
      </section>
    </>
  )
}

export default Accordion
