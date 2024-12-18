import { configureStore } from "@reduxjs/toolkit";
import { http } from "../utils";
import React from "react";


const initialState = {
    "messages": [],
    "products": [],
    "users":[],
    "notifications":[]
}


const reducer = (state = initialState, action /* {type:string} */) => {

    switch (action.type) {
        case 'PRODUCTS_UPDATE':
            return { ...state, messages: action.payload }
        case 'MESSAGES_UPDATE':
            return { ...state, messages: action.payload }
        default:
            return state;
    }
}

const middleware = store => next => action => {
    console.log('Middleware triggered:', action);

    if(action.type === 'PRODUCTS_FETCH') {
        http.get('http://localhost:5050/products')
            .then(({data}) => {
                store.dispatch({ type: 'PRODUCTS_UPDATE', payload: data })
            });
    }
    next(action);
}

export const store = configureStore({
    preloadedState: initialState,
    reducer,
    middleware: [middleware],
    name: 'Application State'
})


const useStore = () => {

    const [state,setState] = React.useState(store.getState());

    React.useEffect(() => store.subscribe(() => setState(store.getState())),[]);

    return {state, dispatch: store.dispatch};
}

export default useStore
