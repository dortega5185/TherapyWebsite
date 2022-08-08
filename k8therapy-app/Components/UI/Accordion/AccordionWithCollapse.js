import Accordion from 'react-bootstrap/Accordion'
import { accordionData } from '../../../utils/accordionData'

const AccordionWithCollapse = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>{accordionData[0].title}</Accordion.Header>
        <Accordion.Body>{accordionData[0].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>{accordionData[1].title}</Accordion.Header>
        <Accordion.Body>{accordionData[1].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>{accordionData[2].title}</Accordion.Header>
        <Accordion.Body>{accordionData[2].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>{accordionData[3].title}</Accordion.Header>
        <Accordion.Body>{accordionData[3].content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionWithCollapse
