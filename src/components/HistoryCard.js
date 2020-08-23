import React from 'react'

const HistoryCard = () => {
    return (
        <ul className="list">
            <li className="plus-income">
                Gajian
                <span>+140</span>
                <button className="delete-btn">X</button>
            </li>
            <li className="minus-income">
                Makan
                <span>-10</span>
                <button className="delete-btn">X</button>
            </li>
        </ul>
    )
}

export default HistoryCard
