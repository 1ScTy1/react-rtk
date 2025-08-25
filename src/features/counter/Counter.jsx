import React from "react";
import {useDispatch, useSelector} from "react-redux";


import {increment, decrement, incrementByAmount} from "./counterSlice";


const Counter = () => {
    const count = useSelector(state => state.counter.value);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            {/* При клике отправляем action increment */}

            <button onClick={() => dispatch(decrement())}>-1</button>
            {/* При клике отправляем action decrement */}

            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            {/* Передаем payload = 5 */}
        </div>
    )
}
export default Counter;