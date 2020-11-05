import React, { useCallback, useState } from 'react';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getLaunchesTimeline } from '../apollo/queries';
import { iLaunch, iQueryLaunches } from '../apollo/interface';
import TimelineMarkup from './timelineMarkup';
import ProgressBar from './progressbar';

export enum LAUNCH_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

const initialFetchParams = {
  suspend: true,
  variables: { offset: 0, order: 'desc' },
  notifyOnNetworkStatusChange: true,
};

function Timeline() {
  const { error, data, fetchMore, loading } = useQuery(getLaunchesTimeline, initialFetchParams) as iQueryLaunches;

  const [launchOrder, setLaunchOrder] = useState<LAUNCH_ORDER>(LAUNCH_ORDER.DESC);

  const changeLaunchOrder = useCallback(() => {
    function refreshLaunchesData(order: LAUNCH_ORDER) {
      fetchMore({
        variables: { offset: 0, order },
        updateQuery: (
          existingResult: { launches: iLaunch[] },
          { fetchMoreResult }: { fetchMoreResult: { launches: iLaunch[] } }
        ) => {
          if (!fetchMoreResult) return existingResult;

          return {
            ...existingResult,
            launches: [...fetchMoreResult.launches],
          };
        },
      });
    }

    let newOrder = LAUNCH_ORDER.ASC;
    if (launchOrder === LAUNCH_ORDER.ASC) {
      newOrder = LAUNCH_ORDER.DESC;
    }

    setLaunchOrder(newOrder);
    refreshLaunchesData(newOrder);
  }, [launchOrder, setLaunchOrder, fetchMore]);

  if (error) {
    console.log(error);
    return null;
  }

  function loadMore() {
    fetchMore({
      variables: { offset: data.launches.length, order: launchOrder },
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
  }

  return (
    <>
      <TimelineMarkup launches={data.launches} order={launchOrder} changeOrder={changeLaunchOrder} />
      {loading ? (
        <ProgressBar height='16px' />
      ) : (
        <div className={'load-more'} onClick={loadMore}>
          LOAD MORE
        </div>
      )}
    </>
  );
}

export default Timeline;
