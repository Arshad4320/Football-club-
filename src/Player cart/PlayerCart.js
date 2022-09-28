import React from 'react';
import './PlayerCart.css'

const PlayerCart = ({ data }) => {
    const { name, picture, time } = data
    return (
        <div >
            <div className='content'>
                <img src={picture} alt="" />
                <h5>{name}</h5>
                <p>Time required : {time}s</p>
                <button className=' add-button'>Add To List</button>
            </div>
        </div>
    )
};

export default PlayerCart;