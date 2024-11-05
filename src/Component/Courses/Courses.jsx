import { useEffect } from "react";
import { useState } from "react";

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
        </div>
    );
};

export default Courses;