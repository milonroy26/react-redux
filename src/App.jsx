import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { decrement, increment } from "./features/counters/countersSlice";


function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce(
    (sum, current) => (sum + current.value), 0
  );

  // Increment and Decrement
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  // Increment and Decrement
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div className="bg-[#344151] h-[100vh] flex justify-center items-center flex-col gap-10">
      <div className='text-[#0398d4] font-medium text-[40px] mb-2'>Incerement && Decrement</div>

      {
        counters.map((counter) => (
          <Counter key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))
      }

      {/* total Count */}
      <Stats totalCount={totalCount} />
    </div>
  );
}

export default App;