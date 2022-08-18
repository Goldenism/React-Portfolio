import './fade2.css';
import { CSSTransition} from "react-transition-group";
import React, { useState } from "react";

const Fade2 =()=>{
    const[isVisible, setIsVisible] = useState(false);
    return(
        <div className='container'>
            <CSSTransition in={isVisible} timeout={300} classNames='fade2'>
                <div className='see'>
                    Now you see me
                </div>
            </CSSTransition>
            <button type='button' onClick={()=>setIsVisible(!isVisible)}>
                Click to show
            </button>
        </div>
    );
}

export default Fade2;