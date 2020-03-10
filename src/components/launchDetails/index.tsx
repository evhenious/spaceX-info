import React, { Suspense } from 'react';
import LaunchDetail from './launchDetail';
import './launch.scss';

const fallback = <div className='spinner loader' />;

const Launch = () => {
  return (
    <Suspense fallback={fallback}>
      <LaunchDetail />
    </Suspense>
  );
};

export default Launch;
