/* eslint-disable react/prop-types */
export default function Stats({ totalCount }) {
    return (
        <div className="text-[#0398d4] h-[20vh] text-center pt-8 text-[60px]">
            Total Count: <span className="text-white">  {totalCount} </span>
        </div>
    )
}
