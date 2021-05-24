import React from 'react'
import './styles.css'
import Item from '../../Container/Item/index'
import NikeAirForce from '../../../images/air-force-1-07-shoe-3nGnlt.jpg'
import NikeAirMax from '../../../images/air-max-270-react-rs-shoe-LFF98p.jpg'
import NikeAirMonarch from '../../../images/air-monarch-iv-training-shoe-cc3XbD.jpg'

const Nike = () => {
    return (
        <div>
            <h1>Nike</h1>
            <div className="list-items">
                <Item img={NikeAirForce} name="Nike Air Force 1" star="3.6" price="100.00" />
                <Item img={NikeAirMax} name="Nike Air Force 1" star="3.6" price="100.00" />
                <Item img={NikeAirMonarch} name="Nike Air Force 1" star="3.6" price="100.00" />
            </div>
            
        </div>
    )
}

export default Nike
