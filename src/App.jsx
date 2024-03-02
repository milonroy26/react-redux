import { useDispatch, useSelector } from "react-redux"

export default function App() {

  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">

      </div>

    </div>
  )
}