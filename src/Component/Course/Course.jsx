import PropTypes from 'prop-types';
import { FiDollarSign  } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";
const Course = ({course,handleclick1}) => {
    const {title,description,course_price,cover_img,credit_hour}=course;
    return (
       
        <div className="card bg-base-100 w-64  shadow-xl">
       <figure className="px-4 pt-8">
       <img
      src={cover_img}
      alt=""
      className="rounded-xl" />
       </figure>
  <div className="m-4 items-center ">
    <h2 >{title}</h2>
    <p>{description}?</p>
    <div className='flex justify-between'>
      <span className='mt-1'><FiDollarSign></FiDollarSign></span>
    <p className='text-[#1C1B1B99] font-medium'>  Price:${course_price}</p>
     <span className='mt-1 text-xl'><IoMdBook></IoMdBook></span> 
    <p className='text-[#1C1B1B99] font-medium'>Credit:{credit_hour}</p>

    </div>
   
    <div className="card-actions w-full mt-2">
      <button className="btn btn-primary w-full" onClick={()=>handleclick1(course,credit_hour,course_price)}>Select</button>
    </div>
  </div>
</div>
            
       
    );
};
Course.propTypes={
  course:PropTypes.object.isRequired,
  handleclick1:PropTypes.func
 
}
export default Course;