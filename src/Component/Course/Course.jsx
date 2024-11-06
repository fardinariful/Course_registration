import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {title,description,course_price,cover_img}=course;
    return (
        <div>
        <div className="card bg-base-100 w-96 shadow-xl">
       <figure className="px-10 pt-10">
       <img
      src={cover_img}
      alt=""
      className="rounded-xl" />
       </figure>
  <div className="card-body items-center ">
    <h2 className="card-title">{title}</h2>
    <p>{description}?</p>
    <p>${course_price}</p>
    <div className="card-actions w-full ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};
Course.propTypes={
  course:PropTypes.object.isRequired,
 
}
export default Course;