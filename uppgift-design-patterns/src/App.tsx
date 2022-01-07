import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MeetupsView } from '../src/components/MeetupsView'
import { IMeetup } from './models/Meetup';

function App() {
  return (
    <div className="App">
      <MeetupsView view={function (item: IMeetup): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default App;
