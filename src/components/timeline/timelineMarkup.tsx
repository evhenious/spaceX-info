import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';
import moment from 'moment';

import { iLaunch } from '../apollo/interface';

interface Props {
  launches: iLaunch[];
  loading: boolean;
  onLoadMore(): void;
}

const TimelineMarkup = (props: Props) => {
  const { launches, loading, onLoadMore } = props;

  return (
    <div className='timeline'>
      { launches.map((item, index) => {
        const { mission_name, details, launch_date_utc } = item;
        const date = moment(launch_date_utc).format('MMM Do YY');
        return <TimelineItem
          key={`${launch_date_utc}`}
          title={`${date} - ${mission_name}`}
          content={details}
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

export default TimelineMarkup;
