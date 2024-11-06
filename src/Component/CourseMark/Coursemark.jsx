import CourseMarked from "../CourseMarked/CourseMarked";
import PropTypes from 'prop-types';
const Coursemark = ({coursename}) => {
    return (
        <div className="w-1/3 ">
            
            <h3>CourseName:{coursename.length}</h3>
            {
                coursename.map((coursemarked,idx)=> <CourseMarked key={idx} coursemarked={coursemarked}></CourseMarked>)
            }
        </div>
    );
};




export default Coursemark;