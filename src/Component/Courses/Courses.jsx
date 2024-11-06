import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';
const Courses = ({handleclick1}) => {
 const [courses,setcourses]=useState([]);
 useEffect(()=>
 {
    fetch('courses.json')
    .then(res=>res.json())
    .then(data=>setcourses(data))
 }

    
    ,[])   
    return (
        <div>
            <h3>Courses:{courses.length}</h3>
            <div className="w-2/3 grid grid-cols-3 gap-x-52 gap-y-4 ">
            {
                courses.map((course,idx)=> <Course key={idx} course={course} handleclick1={handleclick1}></Course>)
            }
            </div>
            
        </div>
    );
};


Courses.propTypes={
    handleclick1:PropTypes.func
   
  }
export default Courses;