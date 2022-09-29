import React from 'react';
import { useState, useEffect } from 'react';
import PlayerCart from '../Player cart/PlayerCart';
import SideComponent from '../Side card componets/SideComponent';
import './Player.css'

const Player = () => {
    const [playerItem, setPlayerItem] = useState([])
    useEffect(() => {
        fetch('playerData.json')
            .then(res => res.json())
            .then(data => setPlayerItem(data))
    }, [])
    return (
        <div>
            <div className="card-container">
                <div className="cart-content">
                    {playerItem.map(p => <PlayerCart data={p}></PlayerCart>)}
                </div>
                <div className="side-content">
                    <SideComponent></SideComponent>
                </div>
            </div>
        </div>
    );
};

export default Player;