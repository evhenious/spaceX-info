import React, { Suspense } from 'react';
import TLine from './timelineContainer';

// TODO improve fallback
const fallback = null;

const Timeline = () => {
  return (
    <Suspense fallback={fallback}>
      <TLine />
    </Suspense>
  );
};

export {Timeline};
