import React, { Fragment } from 'react';

import './App.css';

//components
import ListTeam from "./components/ListTeam";

function App() {
  return (
    <Fragment>
      <ListTeam manager="Patrick" />
    </Fragment>
  );
}

export default App;
