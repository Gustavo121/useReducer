import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'decrement':
            return { count: state.count - 1 };
        case 'increment':
            return { count: state.count + 1 };
        default:
            return state;
    }
}

export function CounterUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Counter com useReducer</h3>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}