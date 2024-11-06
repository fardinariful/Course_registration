import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
 const [courses,setcourses]=useState([]);
 useEffect(()=>
 {
    fetch('courses.json')
    .then(res=>res.json())
    .then(data=>setcourses(data))
 }

    
    ,[])   
    return (
        <div className="w-2/3 grid grid--col-3">
            <h3>Courses:{courses.length}</h3>
            {
                courses.map((course,idx)=> <Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;