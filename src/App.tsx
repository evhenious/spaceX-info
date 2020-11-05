import React from 'react';
import './App.scss';
import Timeline from './components/timeline';
import Header from './components/header';
import withApollo from './components/apollo';
import { ContextProvider } from './contextProvicer';
import LaunchDetail from './components/launchDetails';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ContextProvider>
        <LaunchDetail />
        <Header />
        <Timeline />
      </ContextProvider>
    </div>
  );
};

export default withApollo(App);
