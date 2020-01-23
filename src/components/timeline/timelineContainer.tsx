import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';

import { useQuery } from 'react-apollo-hooks';
import { getLaunchesTimeline } from '../apollo/queries';

interface iLaunch {
  launch_date_utc: string;
  mission_name: string;
  details: string;
}

interface iQueryLaunches {
  errors: any;
  data: {
    launches: iLaunch[]
  }
}

const Timeline = () => {
  const { errors, data } = useQuery(getLaunchesTimeline, {suspend: true}) as iQueryLaunches;
  if(errors) {
    console.log(errors);
    return null;
  }

  return (
    <div className="timeline">
      { data.launches.map((item, index) => {
        const { mission_name, details, launch_date_utc } = item;
        const date = new Date(launch_date_utc).toLocaleDateString();
        return <TimelineItem key={`${launch_date_utc}`} title={`${date} - ${mission_name}`} content={details || 'no details available'} right={Boolean(index % 2)} />
      }) }
    </div>
  );
};

export default Timeline;
