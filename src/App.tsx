import React from 'react';

import './App.css';
// import Dashboard from './components/Dashboard';
// import IykonsArticle from './components/IykonsArticle';
// import Article_Group from './components/Pages/ArticlesGroup/Article_Group';
// import NewsCardList from './components/CustomCards/CustomCard';
// import Article from './components/Pages/Articles/Article';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppRouteMap from './Routers/AppRouteMap';
function App() {

  

  return (
    <div className="App">
<Router>

        {AppRouteMap()}

</Router>
      {/* <Board/> */}
      {/* <Dashboard/> */}
      {/* <IykonsArticle/> */}
      {/* <Article_Group/> */}
      {/* <Article/> */}
      {/* <NewsCardList/> */}
    </div>
  );
}

export default App;
