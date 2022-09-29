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
            <div className="question-container container">
                <div className="question-items">
                    <h4>How Does React Works?</h4>
                    <p>React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.</p>
                </div>
                <div className="question-items">
                    <h4>What is difference between props and state in react?</h4>
                    <p>We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.</p>
                </div>
                <div className="question-items">
                    <h4>How use effect without api load working in react?</h4>
                    <p>In React development, web application programming interfaces (APIs) are an integral part of single-page application (SPA) designs. APIs are the primary way for applications to programmatically communicate with servers to provide users with real-time data and to save user changes. In React applications, you will use APIs to load user preferences, display user information, fetch configuration or security information, and save application state changes.</p>
                </div>
            </div>
        </div>
    );
};
export default Player;