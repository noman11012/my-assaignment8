import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Evaluation.css';
const Evaluation = (props) => {
    
    console.log("Evaluation Class "+props.totaltime);
    const [active, setActive] = useState(0);
  const handleClick = (valueTime) => {
    setActive(valueTime);   
    console.log(valueTime);
  };

  const notify = () => {toast.success('Total Exercise Time: '+(props.totaltime-active)+' seconds', {
    position: toast.POSITION.TOP_CENTER
});
};

    return (
        <div className='evaluationCart'>
       {/* profile segment */}
            <div className="profile">
                <img src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-1/222013588_4301723883217505_6763154129568926975_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGo2T4bUektrKU6O0mg4CAmTLiHm4zCqTpMuIebjMKpOnAUFhSoVsftaUN0YhiLFuR1ApsbQW8QRBoUTaRjGXta&_nc_ohc=gsyN7h1wjkMAX8D6ilz&_nc_ht=scontent.fdac90-1.fna&oh=00_AfB2RDCrF6OUExVBQAOlmnlp1o7aMWvLkfunnEGokWKgNQ&oe=63BF8047" alt="" />
                <div className="profileInfo">
                    <h3>Shah Musabbir Miraj</h3>
                    <address>potuakhali, bangladesh</address>
                </div>
            </div>
        {/* profile weight height and age segment */}

            <div className="weightInfo">
                <div>
                    <h3>75<span className='weightValue'>kg</span></h3>
                    <p>weight</p>
                </div>
                <div>
                    <h3>5'8"<span className='weightValue'>feet</span></h3>
                    <p>height</p>
                </div>
                <div>
                    <h3>30<span className='weightValue'>yrs</span></h3>
                    <p>age</p>
                </div>
            </div>

        {/* exercise break Time segment  */}

            <div className="exerciseTime">
                <button className={active===10 ? "green-btn" : "white-btn"} onClick={()=>handleClick(10)} >10s</button>
                <button className={active===20 ? "green-btn" : "white-btn"} onClick={()=>handleClick(20)}>20s</button>
                <button className={active===30 ? "green-btn" : "white-btn"} onClick={()=>handleClick(30)}>30s</button>
                <button className={active===40 ? "green-btn" : "white-btn"} onClick={()=>handleClick(40)}>40s</button>
            </div>
        {/* Exercise time calculation segment */}
            <div className="exersiceDetailsEvaluation">
                <h3>Exercise Details</h3>
                <div className="eTime">
                    <p>Exercise Time:</p>
                    <p className='parSec'>{props.totaltime} seconds</p>
                </div>
                <div className="bTime">
                <p>Break Time:</p>
                <p className='parSec'>{active} seconds</p>
                </div>
            </div>

            {/* Activity completion segment */}
           <div>
                <button  className='btnActiviyCompletion' onClick={notify}>
                    <p className='btntextActivity'>Activity Completed</p>
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Evaluation;