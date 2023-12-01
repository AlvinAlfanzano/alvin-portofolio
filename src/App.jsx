import { useState } from 'react'
import './App.css'
import Aboutme from './Aboutme'
import ItemList from './ItemList'
import Myskill from './Myskill'


function App() {
  const [page, setpage] = useState(0)
  const [skill, setskill] = useState([
    {
    hardskill : "HTML & CSS",
    level: "Advance",
    },
    {
    hardskill : "Javascript",
    level: "Intermediate",
    },
    {
    hardskill : "Document Object Model",
    level: "Intermediate",
    },
    {
    hardskill : "ReactJS",
    level: "Intermediate",
    },
    {
    hardskill : "Java Programing",
    level: "Advance"
    },
  ])
  
  const about= ()=>{
    return setpage(0);
  }
  const todo= ()=>{
    return setpage(1);
  }

  return (
    
    <>
    <div className="container">
      

    <div className="header">
      <div className="title">
        <h1>Alvin Alfanzano</h1>
        <h5>Front-End Developer</h5>
      </div>
      <div className="nav">
        <a onClick={about} href="#"><h3>About Me</h3></a>
        <a onClick={todo} href="#" ><h3>To Do List</h3></a>
      </div>
    </div>
    
    <div className="hero">
      {page === 0 ?(<Aboutme />):(<ItemList />)}
        
    </div>
    <div className="footer">
      {skill.map((e) => {
        return(
          <>
          
          {
          <Myskill hardskill={e.hardskill} level={e.level} />
          }
          </>
        )
      })

      }
    </div>
    </div>
    </>
  )
}

export default App
