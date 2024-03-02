/* eslint-disable react/prop-types */

export default function ResetCount({ onResetHandler }) {
    return (
        <div>

            <button onClick={onResetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
                Reset
            </button>

        </div>
    )
}
