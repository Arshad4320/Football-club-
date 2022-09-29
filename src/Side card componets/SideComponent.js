import React from 'react';
import './SideComponent.css'

const SideComponent = () => {
    return (
        <div>
            <div className="side-details">
                <div className="image-content">image-section</div>
                <div className="break-content">
                    <h5>Add Break</h5>
                    <div className="timer">
                        <p><span>10s</span></p>
                        <p><span>20s</span></p>
                        <p><span>15s</span></p>
                        <p><span>15s</span></p>
                        <p><span>16s</span></p>
                    </div>
                </div>
                <div className="exercise-details">
                    <h6>Exercise Details</h6>
                    <div className="exercise-time">
                        <h6>Exercise time</h6>
                        <input placeholder='seconds' type="text" />
                    </div>
                    <div className="break-time">
                        <h6>Break time</h6>
                        <input placeholder='seconds' type="text" />
                    </div>
                </div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideComponent;