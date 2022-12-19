import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AxiosWithUseEffectAndDebounce from "./AxiosWithUseEffectAndDebounce";
import HomePage from "./HomePage";
import NewsDetailsPage from "./News/NewsDetailsPage";
import FinalHigherComponent from "./ReactHocExample";
import UseEffectTypes from "./UseEffectTypes";





const App = () =>
  <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/useeffecttypes" element={<UseEffectTypes/>}/>
        <Route  path="/axiosdebounce" element={<AxiosWithUseEffectAndDebounce/>}/> 
        <Route  path="/higherordercomponent" element={<FinalHigherComponent title="higher"/>}/>
        <Route  path="/newsDetail/:id" element={<NewsDetailsPage/>}/>       
      </Routes>
  </Router>;

export default App;