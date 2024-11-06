import { useState } from 'react'
import './App.css'
import Coursemark from './Component/CourseMark/Coursemark'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'

function App() {
const [coursename,setcoursename]=useState([]);
const handleclick1=course=>{
  const newcoursemark = [...coursename,course];
  setcoursename(newcoursemark);
}
  return (
    <>
      <div className='container mx-auto p-10'>
      <Header></Header>
      <div className='flex'>
      <Courses  handleclick1={handleclick1}></Courses>
      <Coursemark coursename={coursename}></Coursemark>
      </div>
     
      </div>
      
      
    </>
  )
}

export default App
