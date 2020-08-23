import React, {useContext} from 'react'
import HistoryCard from './HistoryCard'
import {GlobalContext} from '../context/GlobalContext';

const History = () => {
    const { transactions } = useContext(GlobalContext)
    

    return (
        <div className="history-container">
            <h3>History</h3>
            <hr/>
            {transactions.map(transactions => (<HistoryCard key={transactions.id} transactions={transactions}/>) )}
        </div>
    )
}

export default History
