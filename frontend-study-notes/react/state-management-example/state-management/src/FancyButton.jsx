import React from 'react';
export default function FancyButton({ onClick, text}) {
 return (
   <button
     onClick={onClick}
     style={{
       backgroundColor: 'purple',
       color: 'white',
       border: 'none',
       borderRadius: '5px',
       padding: '10px 20px',
       cursor: 'pointer',
     }}
   >
       {text}
   </button>
 );
}