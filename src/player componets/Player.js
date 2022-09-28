import React from 'react';
import { useState, useEffect } from 'react';
import PlayerCart from '../Player cart/PlayerCart';

const Player = () => {
    const [playerItem, setPlayerItem] = useState([])
    useEffect(() => {
        fetch('playerData.json')
            .then(res => res.json())
            .then(data => setPlayerItem(data))
    }, [])
    return (
        <div>
            {
                playerItem.map(p => <PlayerCart data={p}></PlayerCart>)}
        </div>
    );
};

export default Player;