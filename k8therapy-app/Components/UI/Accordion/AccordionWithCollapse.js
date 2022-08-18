import Accordion from 'react-bootstrap/Accordion'
import { accordionData } from '../../../utils/accordionData'

const AccordionWithCollapse = () => {
  return (
    <Accordion defaultActiveKey='0'>
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
      <Accordion.Item eventKey='4'>
        <Accordion.Header>{accordionData[4].title}</Accordion.Header>
        <Accordion.Body>{accordionData[4].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>{accordionData[5].title}</Accordion.Header>
        <Accordion.Body>{accordionData[5].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>{accordionData[6].title}</Accordion.Header>
        <Accordion.Body>{accordionData[6].content}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='7'>
        <Accordion.Header>{accordionData[7].title}</Accordion.Header>
        <Accordion.Body>{accordionData[7].content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionWithCollapse
