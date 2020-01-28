import React, { useState, Dispatch } from 'react';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getLaunchesTimeline } from '../apollo/queries';
import { iLaunch, iQueryLaunches } from '../apollo/interface';
import TimelineMarkup from './timelineMarkup';

const initialFetchParams = {
  suspend: true,
  variables: { offset: 0 },
  notifyOnNetworkStatusChange: true
};

interface iContext {
  launchID: string;
  setLaunchID: Dispatch<any> | null;
}

export const Context = React.createContext<iContext>({ launchID: '', setLaunchID: null });

const Timeline = () => {
  const { errors, data, fetchMore, loading } = useQuery(getLaunchesTimeline, initialFetchParams) as iQueryLaunches;

  // TODO use this selected id to fetch details and draw
  const [selectedLaunchID, setSelectedLaunchID] = useState<string>('');
  console.log(`selectedLaunchID: ${selectedLaunchID}`);

  if(errors) {
    console.log(errors);
    return null;
  }

  const onLoadMore = () => {
    fetchMore({
      variables: { offset: data.launches.length },
      updateQuery: (existingResult: {launches: iLaunch[]}, { fetchMoreResult }: {fetchMoreResult: {launches: iLaunch[]}}) => {
        if (!fetchMoreResult) return existingResult;

        return {
          ...existingResult,
          launches: [...existingResult.launches, ...fetchMoreResult.launches]
        }
      }
    });
  };

  return (
    <Context.Provider value={{ launchID: selectedLaunchID, setLaunchID: setSelectedLaunchID }}>
      <TimelineMarkup launches={data.launches} loading={loading} onLoadMore={onLoadMore} />
    </Context.Provider>
  );
};

export default Timeline;
