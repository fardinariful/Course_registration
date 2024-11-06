import './App.css'
import Coursemark from './Component/CourseMark/Coursemark'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <div className='container mx-auto p-10'>
      <Header></Header>
      <div className='flex'>
      <Courses></Courses>
      <Coursemark></Coursemark>
      </div>
     
      </div>
      
      
    </>
  )
}

export default App
