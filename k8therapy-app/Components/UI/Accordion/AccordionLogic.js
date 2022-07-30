import { useState } from 'react'
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs'

const AccordionLogic = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordion-item'>
      <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <div className='accordion-header'>{title}</div>
        <div className='accordion-switch'>
          {isActive ? <BsFillDashCircleFill /> : <BsFillPlusCircleFill />}
        </div>
      </div>
      {isActive && <div className='accordion-content'>{content}</div>}
    </div>
  )
}

export default AccordionLogic
