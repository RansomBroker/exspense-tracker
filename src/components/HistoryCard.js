import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const HistoryCard = ({transactions}) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transactions.amount < 0 ? '-' : '+';

    return (
        <ul className="list">
            <li className={transactions.amount < 0 ? 'minus-income' : 'plus-income'}>
                {transactions.text}
                <span>{sign}${Math.abs(transactions.amount)}</span>
                <button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">X</button>
            </li>
        </ul>
    )
}

export default HistoryCard
