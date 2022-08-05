import AccordionLogic from './AccordionLogic'
import { accordionData } from '../../../utils/accordionData'

const Accordion = () => {
  return (
    <>
      <section className='accordion'>
        {accordionData.map(({ title, content, index }) => (
          <AccordionLogic title={title} content={content} key={index} />
        ))}
      </section>
    </>
  )
}

export default Accordion
