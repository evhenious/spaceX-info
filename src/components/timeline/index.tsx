import React, { Suspense } from 'react';
import TLine from './timelineContainer';
import ProgressBar from './progressbar';

const fallback = <ProgressBar height='10vh'/>;

const Timeline = () => {
  return (
    <Suspense fallback={fallback}>
      <TLine />
    </Suspense>
  );
};

export default Timeline;
