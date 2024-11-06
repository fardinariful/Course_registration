import { useState } from 'react'
import './App.css'
import Coursemark from './Component/CourseMark/Coursemark'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'

function App() {
const [coursename,setcoursename]=useState([]);
const [credithour,setcredithour]=useState(20);
const [totalcredit,settotalcredit]=useState(0);
const [totalprice,settotalprice]=useState(0);
const handleclick1=(course,time,price)=>{
  const newcoursemark = [...coursename,course];
  setcoursename(newcoursemark);
     setcredithour(credithour-time);
     settotalcredit(totalcredit+time);
     settotalprice(totalprice+price);
     
}
  return (
    <>
      <div className='container mx-auto p-10'>
      <Header></Header>
      <div className='flex'>
      <Courses  handleclick1={handleclick1}></Courses>
      <Coursemark coursename={coursename} credithour={credithour} totalcredit={totalcredit} totalprice={totalprice}></Coursemark>
      </div>
     
      </div>
      
      
    </>
  )
}

export default App
