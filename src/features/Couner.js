import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counter/counterSlice'

const Couner = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    console.log("addValue", addValue)
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>Add</button>
                <button onClick={() => dispatch(decrement())}>Less</button>
                <input type="text" value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Numbers</button>
                <button onClick={resetAll}>Reset</button>

            </div>
        </div>
    )
}

export default Couner