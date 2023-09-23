import {  useEffect, useState } from "react";

export default function MainPage() {
  const [advice, setAdvice] = useState("");
 const [count,sercount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    sercount((c)=>c+1)
  }
useEffect (function (){
  getAdvice();
},[]);
  

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count ={count} />
    </div>
  );
}

function Message(props){
return(
  <p>You have read <strong>{props.count}</strong>  pieces of advice</p>
);
}
