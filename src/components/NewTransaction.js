import React from 'react'

const NewTransaction = () => {
    return (
        <div>
            <h3>Add New New Transaction</h3>
            <hr/>
            <form>
                <div className="form-control">
                    <label>Description </label>
                    <input type="text" placeholder="Enter Desc...." />
                </div>
                <div className="form-control">
                    <p>Amount</p>
                    <label>(Negative-exspense, positive-income)</label>
                    <input type="number" placeholder="enter amount.."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default NewTransaction
