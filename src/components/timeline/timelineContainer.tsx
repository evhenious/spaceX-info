import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';
import moment from 'moment';

import { useQuery } from 'react-apollo-hooks';
import { getLaunchesTimeline } from '../apollo/queries';

interface iLaunch {
  launch_date_utc: string;
  mission_name: string;
  details: string;
  id: string;
}

interface iQueryLaunches {
  errors: any;
  loading: boolean;
  data: {
    launches: iLaunch[]
  },
  fetchMore(options: {[key: string]: any}): void;
}

const initialFetchParams = {
  suspend: true,
  variables: { offset: 0 },
  notifyOnNetworkStatusChange: true
};

const Timeline = () => {
  const { errors, data, fetchMore, loading } = useQuery(getLaunchesTimeline, initialFetchParams) as iQueryLaunches;

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
  }

  return (
    <div className='timeline'>
      { data.launches.map((item, index) => {
        const { mission_name, details, launch_date_utc } = item;
        const date = moment(launch_date_utc).format('MMM Do YY');
        return <TimelineItem
          key={`${launch_date_utc}`}
          title={`${date} - ${mission_name}`}
          content={details || 'no details available'}
          right={Boolean(index % 2)}
        />
      }) }
      <div>
        <div className={'load-more'} onClick={onLoadMore}>LOAD MORE</div>
        { loading ? <div className={'progress'} /> : null }
      </div>
    </div>
  );
};

export default Timeline;
