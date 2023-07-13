import React from 'react';
import './App.css';
import { TopForm } from '../TopForm/TopForm';
import { PathStars } from '../Path&Stars/Path&Stars';
import { ListNames } from '../ListNames/ListNames';
import IssuesForm from '../IssuesForm/IssuesForm';

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
