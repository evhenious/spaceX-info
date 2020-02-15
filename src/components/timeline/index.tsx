import React, { Suspense } from 'react';
import TLine from './timelineContainer';

// TODO improve fallback
const fallback = <div>Loading timeline</div>;

const Timeline = () => {
  return (
    <Suspense fallback={fallback}>
      <TLine />
    </Suspense>
  );
};

export default Timeline;
