import React from 'react'
import './styles.css'
import {Heart, Star} from 'react-feather'

const Item = ({img, name, star, price}) => {
    return (
        <div className="item-container">
            <div className="ellipse">
                <Heart className="heart-icon" />
            </div>
            <div className="item">
                <img className="item-img" src={img} />
                <div className="item-detail">
                    <p id="text1">{name}</p>
                    <p id="text2"><Star fill="#F8E008"/>({star})</p>
                    <p>${price}</p>
                    <button className="item-btn">Add to Card</button>
                </div>
            </div>
        </div>
    )
}

export default Item
