import React from 'react'
import './Myskill.css'

function Myskill(props) {
  return (
    <div className='conskill'>
        <h4 className='text1'>{props.hardskill}</h4>
        <h6 className='text2'>{props.level}</h6>
    </div>
  )
}

export default Myskill