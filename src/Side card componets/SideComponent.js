import React from 'react';
import './SideComponent.css'
import images from '../images/download.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideComponent = ({ sideCard }) => {
    let exTime = 0;
    for (const cart of sideCard) {
        exTime = exTime + cart.time

    }
    const buttonTest = () => {
        toast.info("Wow Your Activity Completed. Awesome!", {
            position: 'top-center'
        });
    }
    return (
        <div>
            <div className="side-container">
                <div className="image-content">
                    <div className="image-details">
                        <img src={images} alt="" />
                    </div>
                    <div className="images-info">
                        <p>MD. ARSHAD ULLAH</p>
                        <span>BanglaDesh</span>
                    </div>
                </div>
                <div className="image-info-details">
                    <div className="weight">
                        <h5>60kg</h5>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <h5> 5.6</h5>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <h5>22y</h5>
                        <p>Age</p>
                    </div>
                </div>
                <div className="break-content">
                    <h5>Add Break</h5>
                    <div className="timer">
                        <button><span>10s</span></button>
                        <button><span>20s</span></button>
                        <button><span>30s</span></button>
                        <button><span>40s</span></button>
                        <button><span>50s</span></button>

                    </div>
                </div>
                <div className="exercise-details">
                    <div className="exercise-time">
                        <h6>Exercise time : {exTime}s</h6>
                    </div>
                    <div className="break-time">
                        <h6>Break time :</h6>
                    </div>
                </div>
                <button onClick={buttonTest} className='activity-btn'>Activity Completed</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SideComponent;