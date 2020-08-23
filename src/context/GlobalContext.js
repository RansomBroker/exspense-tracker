import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial State
const initialState = {
    transactions: []
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const deleteTransaction =(id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    const addTransaction =(transactions) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions,
        });
    }

    

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}