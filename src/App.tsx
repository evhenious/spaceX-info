import React from 'react';
import './App.scss';
import { Timeline } from './components/timeline';
import Header from './components/header';
import withApollo from './components/apollo';
import { ContextProvider } from './contextProvicer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Timeline />
      </ContextProvider>
    </div>
  );
}

export default withApollo(App);
