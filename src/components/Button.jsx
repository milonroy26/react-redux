/* eslint-disable react/prop-types */

export default function Button({ handler, children }) {
    return (
        <>
            <button onClick={handler} className='text-center w-20 border-[#bfbfbf] text-5xl'>
                {children}
            </button>
        </>
    )
}
