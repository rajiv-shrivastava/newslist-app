/*
useEffect

It takes a function as a first argument, and an array of dependencies as the second:
React.useEffect(fn, [deps])`

It is being called in the render, which looks like this:
1. Preparing UI with the current state
2. Rendering results, i.e. <div>Hello World!</div>
3. Committing results to the DOM
4. Browser paints the screen
5. React calls useEffect()

4 possible ways to call the method:

1. once, when component mounts
2. on every component render
3. on every component render with a condition
4. when component unmounts
*/

import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UseEffectTypes = () => { 
    const [dep1,setDep1] = useState(false)
    const [dep2,setDep2] = useState(true)
    
    /* UseLayoutEffect
      
      The difference comes from where useLayoutEffect will be called before the user can 
      see the visual changes in that render whereas useEffect will be called after a user 
      is able to see the visual changes in that render.

      This runs synchronously immediately after React has performed all DOM mutations. 
      This can be useful if you need to make DOM measurements 
      (like getting the scroll position or other styles for an element) 
      and then make DOM mutations or trigger a synchronous re-render by updating state.
    */
    useLayoutEffect(() => {
        console.log("useLayoutEffect is called")
    }, [])
    

    /* When Component Mounts
     Usually, you would like to use it for fetching data or adding event listeners.
     To run the function once, add an empty dependency list. If there are no dependencies in it, 
     that means it will stay the same all the time, and will not call the function again.
     */
    useEffect(() => {
        console.log("callMeOnlyOnce i will be called once only ----")
    }, [])

    /* On Every Component Render
     To call the function on each component render, 
     skip adding the dependency list. No list, nothing to compare against, 
     that means run the effect every time.
     */
    useEffect(() => {
        console.log("On Every Component Render")
    })

    /* On Every Component Render with a Condition
    To call a function conditionally, specify the list of dependencies.
    And the rule of thumb is to always add those dependencies 
    that you are using inside the useEffect().
    */
    useEffect(() => {
        console.log("On Every Component Render with a Condition")
    }, [dep1, dep2])

    /*When Component Unmounts
      To clean up (remove event listeners or stop data fetching with a side effect) 
      after the component unmounts, a return statement with a function should be 
      added inside the useEffect() hook.
    */
      useEffect(() => {
        return () => {
            console.log("When Component Unmounts")
        }
    }, [])

    return (
        <>
             <Link to="/"> <Button> BACK TO HOME </Button> </Link>
             <h1> Types OF UseEffect </h1>
             <Button onClick={() => setDep1(!dep1)} > Button to update dependency 1 </Button>
             <Button onClick={() => setDep2(!dep2)} >Button to update dependency 2 </Button>
         </>
         )
}

export default UseEffectTypes;