import { useReducer } from 'react';
import { Context } from './Context/Context';

const initialState = {
    email: ''
}
const reducer = (state, action) => {
    if (action.type === 'email') {
        return {
            email: action.value
        }
    } else {
        return initialState
    }
}

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;