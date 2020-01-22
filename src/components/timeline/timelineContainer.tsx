import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

interface iLaunch {
  launch_date_utc: string;
  mission_name: string;
  details: string;
}

interface iQueryLaunches {
  loading: boolean;
  errors: any;
  data: {
    launches: iLaunch[]
  }
}

const query = gql`
  {
    launches(sort: "launch_date_utc", limit: 10) {
      launch_date_utc
      mission_name
      details
    }
  }
`;

const Timeline = () => {
  const { errors, data } = useQuery(query, {suspend: true}) as iQueryLaunches;
  if(errors) {
    console.log(errors);
    return null;
  }

  return (
    <div className="timeline">
      { data.launches.map((item, index) => {
        const { mission_name, details, launch_date_utc } = item;
        const date = new Date(launch_date_utc).toLocaleDateString();
        return <TimelineItem title={`${date} - ${mission_name}`} content={details || 'no details available'} right={Boolean(index % 2)} />
      }) }
    </div>
  );
};

export default Timeline;
