import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';
import moment from 'moment';

import { iLaunch } from '../apollo/interface';

interface Props {
  launches: iLaunch[];
}

const TimelineMarkup: React.FC<Props> = (props) => {
  const { launches } = props;

  return (
    <div className='timeline'>
      { launches.map((item, index) => {
        const { mission_name, details, launch_date_utc, id, launch_success } = item;
        const date = moment(launch_date_utc).format('MMM Do YY');
        return <TimelineItem
          key={`${launch_date_utc}`}
          title={`${date} - ${mission_name}`}
          content={details}
          launchID={id}
          right={Boolean(index % 2)}
          success={launch_success}
        />
      }) }
    </div>
  );
};

export default TimelineMarkup;
