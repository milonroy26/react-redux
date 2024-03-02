/* eslint-disable react/prop-types */
import ResetCount from "./ResetCount";
import Button from "./Button";

export default function Counter({ count, onIncrement, onDecrement }) {


    return (
        <div className='w-[100vw] flex justify-center items-center flex-col gap-10'>
            <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
                <Button handler={onDecrement}>
                    -
                </Button>

                <div className='font-bold gap-12 text-5xl'>
                    {count}
                </div>

                <Button handler={onIncrement}>
                    +
                </Button>
            </div>

            {/* reset */}
            <ResetCount />
        </div>
    );
}
