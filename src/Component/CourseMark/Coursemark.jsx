import CourseMarked from "../CourseMarked/CourseMarked";
import PropTypes from 'prop-types';
const Coursemark = ({coursename,credithour,totalcredit,totalprice}) => {
    return (
        <div className="w-1/3 bg-[#FFFFFF]  shadow-xl space-y-3">
            <h3 className="text-center text-[#2F80ED] font-bold text-xl">Credit Hour Remaining:{credithour}</h3>
            <hr />
            <h3 className="text-3xl font-bold text-center">Course Name</h3>
            {
                coursename.map((coursemarked,idx)=> <CourseMarked key={idx} coursemarked={coursemarked}></CourseMarked>)
            }
            <hr />
            <p className="text-center text-[#1C1B1BCC]">Total Credit Hour : {totalcredit}</p>
            <hr />
            <p className="text-center text-[#1C1B1BCC]">Total Price : {totalprice} USD</p>
        </div>
    );
};

Coursemark.propTypes={
    coursename:PropTypes.object,
    credithour:PropTypes.number,
    totalprice:PropTypes.number,
    totalcredit:PropTypes.number
  }


export default Coursemark;