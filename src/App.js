import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import AxiosWithUseEffectAndDebounce from "./AxiosWithUseEffectAndDebounce";
import HomePage from "./HomePage";
import LoginComponent from "./LoginComponent";
import NewsDetailsPage from "./News/NewsDetailsPage";
import NoAuthPage from "./NoAuthPage";
import FinalHigherComponent from "./ReactHocExample";
import UseEffectTypes from "./UseEffectTypes";
import UseMemoExample from "./useMemoExample";
 


const PrivateRoute = ({ children}) => {
//try setting this to true false
  const isAuthenticated = true;
  
  if (isAuthenticated ) {
    return children
  }
  else{
    alert('sorry you are not allowed')
  return <Navigate to="/" />    
  }
    
  
}

const App = () =>
  <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/useeffecttypes" element={<UseEffectTypes/>}/>
        <Route  path="/axiosdebounce" element={<AxiosWithUseEffectAndDebounce/>}/> 
        <Route  path="/usememoeg" element={<UseMemoExample data={[2,3,12,3]}/>}/>
        <Route  path="/higherordercomponent" element={<FinalHigherComponent title="higher"/>}/>
        <Route  path="/newsDetail/:id" element={<NewsDetailsPage/>}/>
        <Route  path="/login" element={<LoginComponent/>}/>   
        <Route element={<PrivateRoute />}>
          <Route path="/noauthpage" element={<NoAuthPage />} />
        </Route>    
      </Routes>
  </Router>;

export default App;