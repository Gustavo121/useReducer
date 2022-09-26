import { useReducer, useState } from "react";

const initialState = { count: 0 };

const actions = {
    decrement: 'decrement',
    increment: 'increment',
    double: 'multiply',
    half: 'half',
    reset: 'reset',
    custom: 'custom',
};

function reducer(state, action) {
    switch (action.type) {
        case actions.decrement:
            return { count: state.count - 1 };
        case actions.increment:
            return { count: state.count + 1 };
        case actions.double:
            return { count: state.count * 2 };
        case actions.half:
            return { count: state.count / 2 };
        case actions.reset:
            return { count: initialState.count }
        case actions.custom:
            return { count: action.payload }
        default:
            return state;
    }
}

export function CounterUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [customCount, setCustomCount] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: actions.custom, payload: customCount })
    }

    return (
        <div>
            <h3>Counter com useReducer</h3>
            <span>Count: {state.count}</span>
            <br />
            <button onClick={() => dispatch({ type: actions.decrement })}>-</button>            
            <button onClick={() => dispatch({ type: actions.increment })}>+</button>
            <button onClick={() => dispatch({ type: actions.double })}>X2</button>
            <button onClick={() => dispatch({ type: actions.half })}>/2</button>
            <button onClick={() => dispatch({ type: actions.reset })}>Reset</button>
            <br />
            <br />

            <form onSubmit={handleSubmit}>
                <label htmlFor="custom_value">Valor personalizado: </label>
                <input 
                    id="custom_value" 
                    type="number" 
                    value={customCount} 
                    onChange={(e) => setCustomCount(e.target.value)} 
                />
                <button type="submit">Inserir</button>
            </form>
        </div>
    );
}