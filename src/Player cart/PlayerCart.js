import React from 'react';

const PlayerCart = ({ data }) => {
    const { name, picture, time } = data
    return (
        <div>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{time}</p>
        </div>
    );
};

export default PlayerCart;