import React from 'react';
import { useState, useEffect } from 'react';
import PlayerCart from '../Player cart/PlayerCart';
import './Player.css'
import SideComponent from './../Side card componets/SideComponent';
const Player = () => {
    const [playerItem, setPlayerItem] = useState([])
    const [time, setTime] = useState([])
    useEffect(() => {
        fetch('playerData.json')
            .then(res => res.json())
            .then(data => setPlayerItem(data))
    }, [])
    const newTimeHandle = (newTime) => {
        const setNewTime = [...time, newTime]
        setTime(setNewTime)
    }
    return (
        <div>
            <div className="card-container">
                <div className="cart-content">
                    {playerItem.map(p => <PlayerCart data={p}
                        newTimeHandle={newTimeHandle}
                    ></PlayerCart>)}
                </div>
                <div className="side-content">
                    <SideComponent sideCard={time}></SideComponent>
                </div>
            </div>
        </div>
    );
};
export default Player;