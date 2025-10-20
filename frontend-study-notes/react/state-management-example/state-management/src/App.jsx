import React, { useState } from 'react';
import Counter from './Counter';
import FancyButton from './FancyButton';

export default function App() {
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);

 function resetCounts () {
 setCount1(0);
 setCount2(0);
 setCount3(0);
 }

 return (
 <div>
   <Counter count={count1} setCount={setCount1} />
   <Counter count={count2} setCount={setCount2} />
   <Counter count={count3} setCount={setCount3} />
   <h2>Total Count: {count1 + count2 + count3}</h2>
   <FancyButton onClick={resetCounts} text="Reset All Counts" />
 </div>
 );
}