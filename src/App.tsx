import React from 'react';
import './App.scss';
import { Timeline } from './components/timeline';
import Header from './components/header';
import withApollo from './components/apollo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Timeline />
    </div>
  );
}

export default withApollo(App);
