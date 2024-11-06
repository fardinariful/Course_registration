import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {title,description,course_price,cover_img}=course;
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
    <p>${course_price}</p>
    <div className="card-actions w-full ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
            
       
    );
};
Course.propTypes={
  course:PropTypes.object.isRequired,
 
}
export default Course;