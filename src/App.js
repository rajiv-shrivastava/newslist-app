import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom'
import NewsHomePage from "./NewsHomePage";
import NewsDetailsPage from "./News/NewsDetailsPage";


const Topics = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Home = ({ match }) => (
  <div>
    dfdf
    <h3>{match.params.topicId}</h3>
  </div>
);

const App = () =>
  <Router>
      <Routes>
      <Route exact path="/" element={<NewsHomePage/>}/>
      <Route exact path="/newsDetail/:id" element={<NewsDetailsPage/>}/>
      </Routes>
  </Router>;

export default App;