import React, { Suspense } from 'react';
import LaunchDetail from './launchDetail';

// TODO improve fallback
const fallback = <div>Loading launch</div>;

const Launch = () => {
  return (
    <Suspense fallback={fallback}>
      <LaunchDetail />
    </Suspense>
  );
};

export default Launch;
