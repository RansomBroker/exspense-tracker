import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const IncomeExspense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount);

    const income = amounts
    .filter(item => item > 0 )
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

    const exspense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0)*-1)
    
    return (
        <div className="inc-exp-container">
            <div className="income-container">
                <h4>Income</h4>
                <p>${income}</p>
            </div>
            <span className="vl"></span>
            <div className="exspense-container">
                <h4>Exspense</h4>
                <p>${exspense}</p>
            </div>
        </div>
    )
}

export default IncomeExspense
