import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const NewTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text, 
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New New Transaction</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Description </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Desc...." />
                </div>
                <div className="form-control">
                    <p>Amount</p>
                    <label>(Negative-exspense, positive-income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="enter amount.."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default NewTransaction
