import { keyframes } from "styled-components";

const buttonLoading = keyframes`
0% {
}

20% {
    color: transparent;
      transform: scale(1, 1);
    }
    
    40% {
        border-color: #5585ff;
        background-color: transparent;
        transform: scale(1, 1);
    }
    
    60% {
        transform: scale(0.7, 1.1);
        
        margin-left: 1.25rem;
        width: 2.5rem;
        text-indent: -0.6125rem;
        
        color: transparent;
        border-color: #5585ff;
      background-color: #5585ff;
    }
    
    80% {
        transform: scale(1, 1);
    }
    
    100% {
        margin-left: 1.25rem;
        width: 2.5rem;
        
        background-color: #5585ff;
        border-color: #5585ff;
        color: transparent;
    }
    `;

const buttonDotIntro = keyframes`
        0% {
            opacity: 0;
        }
        
        60% {
            opacity: 1;
            transform: scale(1, 1);
        }
        
        100% {
            transform: scale(0.75, 0.75);
        }
        `;

const buttonDotPulse = keyframes`
    0% {
      opacity: 1;
      transform: scale(0.75, 0.75);
    }
  
    15% {
      transform: scale(0.85, 0.85);
    }
  
    45% {
      transform: scale(0.75, 0.75);
    }
  
    55% {
      transform: scale(0.95, 0.95);
    }
  
    85% {
      transform: scale(0.75, 0.75);
    }
  
    100% {
      opacity: 1;
      transform: scale(0.75, 0.75);
    }
  `;

const buttonReady = keyframes`
  0% {
      margin-left: 1.25rem;
      width: 2.5rem;
    }
    
    10% {
        background-color: #5585ff;
        border-color: #5585ff;
    }
    
    70% {
        margin: 0;
        width: 7.25rem;
        background-color: #fff;
        transform: scale(1.1, 1.1);
    }
    
    100% {
        margin: 0;
        width: 7rem;
        border-color: #8cce1e;
        background-color: #fff;
    }
    `;

const buttonDotOutro = keyframes`
        0% {
            opacity: 1;
        }
        
        100% {
            opacity: 0;
            transform: scale(1, 1);
    }
    `;

const buttonReadyLabel = keyframes`
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  `;
export {
  buttonLoading,
  buttonDotIntro,
  buttonDotPulse,
  buttonReady,
  buttonDotOutro,
  buttonReadyLabel
};
