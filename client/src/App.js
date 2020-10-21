import React, { Fragment } from 'react';

import './App.css';

//components
import ListTeam from "./components/ListTeam";
import TopAvailablePlayers from './components/TopAvailablePlayers';

function App() {
  return (
    <Fragment>
      <ListTeam manager="Patrick" />
      <p></p>
      <TopAvailablePlayers />
    </Fragment>
  );
}

export default App;
