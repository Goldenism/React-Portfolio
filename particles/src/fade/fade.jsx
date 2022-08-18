import './fade.css';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import React, { useEffect, useState } from "react";

function Fade() {
    const [showMessage, setShowMessage] = useState(false);
  
    return (
      <div className='container fade'>
         <button onClick={() => setShowMessage(!showMessage)}>
            Show Message
          </button>
         <CSSTransition in={showMessage} timeout={300} className="text" unmountOnExit>
            <p>Hello, I am a message that animates with CSSTransition!</p>
         </CSSTransition>
      </div>
    );
  }
export default Fade;