import { useReducer } from 'react';
import { Context } from './Context/Context';

const initialState = {
    name: '',
    data: [
        {
            _id: "6205f5db637ec0d670b11f65",
            strMeal: " Bubble & Squeak",
            strMealThumb: "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
            idMeal: "52885",
            price: 372
          },
          {
            _id: "6205f5db637ec0d670b11f66",
            strMeal: "Apam balik",
            strMealThumb: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
            idMeal: "53049",
            price: 199
          },
          {
            _id: "6205f5db637ec0d670b11f67",
            strMeal: "Apple & Blackberry Crumble",
            strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
            idMeal: "52893",
            price: 166
          },
          {
            _id: "6205f5db637ec0d670b11f68",
            strMeal: "Apple Frangipan Tart",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
            idMeal: "52768",
            price: 349
          },
    ],
    loading: false,
    searchTerm: ""
}

const reducer = (state, action) => {

    switch(action.type) {
        case "firstName":
            return {
                ...state,
                name: action.value
            }
        case "Data":
            return {
                ...state,
                data: action.value
            }
        case "loading":
            return {
                ...state,
                loading: false
            }
        case "search": {
            return {
                ...state,
                searchTerm: action.value
            }
        }
        default:
            return state
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