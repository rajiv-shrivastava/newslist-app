import React from "react";

const hocCreator = (WrappedComponent) => {
    let customProps = {prop1: 'prop1',prop2: 'prop2'}
     return (props) => (
       <div>
         <h1>Outer Wrapper header <i>This header is also added by HOC in the component</i></h1>
         <WrappedComponent {...props} {...customProps} />
       </div>
     );
   };
   
const innerComponent = (props) => (
  <div>
    <h2> Inner component only has one default prop that is title passed from route file</h2>
      {props.title}
    <h2> Other added custom props are as prop1 and prop2</h2>
    <p>Added prop1 {props.prop1}</p>
    <p>Added prop2 {props.prop2}</p>
  </div>
);


const FinalHigherComponent = hocCreator(innerComponent);

export default FinalHigherComponent;