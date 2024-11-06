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
        <div>
            <h3>Courses:{courses.length}</h3>
            <div className="w-2/3 grid grid-cols-3 gap-x-52 gap-y-4 ">
            {
                courses.map((course,idx)=> <Course key={idx} course={course}></Course>)
            }
            </div>
            
        </div>
    );
};

export default Courses;