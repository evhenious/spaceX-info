import React from 'react';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getLaunchesTimeline } from '../apollo/queries';
import { iLaunch, iQueryLaunches } from '../apollo/interface';
import TimelineMarkup from './timelineMarkup';
import ProgressBar from './progressbar';

const initialFetchParams = {
  suspend: true,
  variables: { offset: 0 },
  notifyOnNetworkStatusChange: true,
};

const Timeline = () => {
  const { error, data, fetchMore, loading } = useQuery(getLaunchesTimeline, initialFetchParams) as iQueryLaunches;

  if (error) {
    console.log(error);
    return null;
  }

  const onLoadMore = () => {
    fetchMore({
      variables: { offset: data.launches.length },
      updateQuery: (
        existingResult: { launches: iLaunch[] },
        { fetchMoreResult }: { fetchMoreResult: { launches: iLaunch[] } }
      ) => {
        if (!fetchMoreResult) return existingResult;

        return {
          ...existingResult,
          launches: [...existingResult.launches, ...fetchMoreResult.launches],
        };
      },
    });
  };

  return (
    <>
      <TimelineMarkup launches={data.launches} />
      {loading ? (
        <ProgressBar height='16px' />
      ) : (
        <div className={'load-more'} onClick={onLoadMore}>
          LOAD MORE
        </div>
      )}
    </>
  );
};

export default Timeline;
