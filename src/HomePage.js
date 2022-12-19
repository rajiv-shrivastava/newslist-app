import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = (props) => {
    
    console.log(props.children)
    return(<>
         <h1 className="text-center"> Home Page component</h1>
         <hr />
         <div className='container-fluid'>
         <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link to="/useeffecttypes"> UseEffectTypes</Link>
            </li>
            <li className="nav-item">
             <Link to="/axiosdebounce"> Axios api call with UseEffect and Custome useDebounce</Link>
            </li>
            <li className="nav-item">
             <Link to="/higherordercomponent"> React Higher Order Component</Link>
            </li>
            </ul>
            </div>
            {props.children}
        </>
    )
}

export default HomePage