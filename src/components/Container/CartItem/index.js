import React, { useState } from 'react'
import './styles.css'
import NikeAirForce from '../../../images/air-force-1-07-shoe-3nGnlt.jpg'
import {Plus, Minus, X} from 'react-feather'

const CartItem = () => {
    const [amount, setAmount] = useState(1);
    const increaseAmount = () => {
        setAmount(amount-1);
    }
    const decreaseAmount = () => {
        setAmount(amount+1);
    }
    return (
        <div className="cartitem">
            <img className="cartitem-img" src={NikeAirForce} />
            <div className="cartitem-detail">
                <p id="text1">Nike Air Force 1</p>
                <button className="sizeBtn">Size: 41</button>
            </div>
            <div className="cartitem-amount">
                <button className="cartitem-amount-control" onClick={increaseAmount} disabled={amount <= 1}>
                    <Minus />
                </button>
                <p>{amount}</p>
                <button className="cartitem-amount-control" onClick={decreaseAmount}>
                    <Plus />
                </button>
            </div>
            <p id="text1">$100.00</p>
            <X />
        </div>
    )
}

export default CartItem
