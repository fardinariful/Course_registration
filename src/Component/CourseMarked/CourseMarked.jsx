import PropTypes from 'prop-types';
const CourseMarked = ({coursemarked}) => {
    const {title}=coursemarked;
    return (
        <div >
            
            <p className='text-[#1C1B1B99] mt-4 text-center'>{title}</p>
        </div>
    );
};
CourseMarked.propTypes={
    coursemarked:PropTypes.object
   
  }
export default CourseMarked;