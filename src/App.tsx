import React from 'react';
import './App.css';
import { Timeline } from './components/timeline';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Timeline />
    </div>
  );
}

export default App;
