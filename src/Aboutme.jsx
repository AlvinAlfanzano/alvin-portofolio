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
            <p>I am a creative problem solver who is interested in producing key research that creates insights that are possible to implement and focuses on customer satisfaction.</p>
            <div className="btnHero">
                <button onClick={()=>{document.location='https://drive.google.com/file/d/1lgLXEzTfoyoLVVFnw6_ts0x6wjFnwuqV/view?usp=drive_link'}}>Cek My Resume</button>
                <button onClick={()=>{document.location='https://github.com/AlvinAlfanzano/'}}>Github</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Aboutme