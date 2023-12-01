import React from 'react'
import img1 from './assets/alvin-ps-formal-2.png'
import './Aboutme.css'

function Aboutme() {
  return (
    <>
    <div className="aboutme">
        <div className="imgMe">
            <img src={img1} alt="" />
        </div>

        <div className="textMe">
            <h1>Hi, i am Alvin</h1>
            <p>I am a creative problem solver who is interested in producing key research that will create insights possible to implement and focus on customer satisfaction.</p>
            <div className="btnHero">
                <button onClick={()=>{document.location='https://drive.google.com/file/d/1A-N-IBNjgI87IdN3LJ1irL3gBRwRYI0P/view?usp=sharing'}}>Cek My Resume</button>
                <button onClick={()=>{document.location='https://github.com/AlvinAlfanzano/'}}>Github</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Aboutme
