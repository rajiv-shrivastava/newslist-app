import React, { useState, useMemo} from "react";

// props data has been passed from App.js file where this component is routed


const UseMemoExample = ({data}) => {
  const [count, setCount] = useState(0);

  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  const sorted = useMemo(
    () => {
      console.log("memorized! only called if data changes");
      let dataArray = []
      let result =  data && data.sort((a, b) => a - b);
      result.map((val, idx) => (
        dataArray.push(<li key={idx}>{val}</li>)
      ))
      return <ul style={{color: `#${randomColor}`}}> {dataArray} </ul>
    },
    [data]
  );
  
  const sortedWithoutMemo = (data) => {
      console.log("calling every time when render happens!");
      let dataArray = []
      let result =  data && data.sort((a, b) => a - b);
      result.map((val, idx) => (
        dataArray.push(<li key={idx}>{val}</li>)
      ))
      return <ul style={{color: `#${randomColor}`}}> {dataArray} </ul>
   }

  console.log("component rendered!",count);

  return (
    <>
      <h1> See the color of li </h1>
       <button onClick={() => {setCount(count + 1)}}>update</button> 
      <p> A memoized render calls when required </p>
      {sorted}
       <p> A unmemoized render calls everytime even if passed props are same</p>
        {sortedWithoutMemo(data)}      
    </>
  );
};

export default UseMemoExample;
