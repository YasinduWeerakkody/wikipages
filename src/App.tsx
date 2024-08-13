import React from 'react';
import Board from './components/board';
import './App.css';
import Dashboard from './components/Dashboard';
import IykonsArticle from './components/IykonsArticle';
import Article_Group from './components/Article_Group';
import NewsCardList from './components/card';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      {/* <Board/> */}
      {/* <Dashboard/> */}
      {/* <IykonsArticle/> */}
      {/* <Article_Group/> */}
      <Article/>
      {/* <NewsCardList/> */}
    </div>
  );
}

export default App;
