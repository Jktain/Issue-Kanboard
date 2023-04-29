import React from 'react';
import './App.css';
import { TopForm } from './components/TopForm/TopForm';
import { PathStars } from './components/Path&Stars/Path&Stars';
import { ListNames } from './components/ListNames/ListNames';
import { IssuesForm } from './components/IssuesForm/IssuesForm';

function App() {

  
  
  return (
    <div className="App">
      <TopForm/>
      <PathStars/>
      <ListNames/>
      <IssuesForm/>
    </div>
  );
}

export default App;
