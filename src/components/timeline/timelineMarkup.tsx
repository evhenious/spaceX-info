import React, { useEffect, useState } from 'react';
import './style.scss';
import TimelineItem from './timelineItem';
import moment from 'moment';

import { iLaunch } from '../apollo/interface';

interface Props {
  launches: iLaunch[];
}

const lookForDarkLogoScroll = (name: string, setClassName: Function) => {
  let observer = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio === 0) {
      setClassName('bg-scroll-fixed');
    } else {
      setClassName('');
    }
  });

  observer.observe(document.querySelector(name) as any);

  return observer;
}

const TimelineMarkup: React.FC<Props> = (props) => {
  const { launches } = props;
  const [observer, setObserver] = useState<IntersectionObserver>();
  const [additionalClassName, setAdditionalClassName] = useState<String>('');

  useEffect(() => {
    const element = document.querySelector(".App-header");
    console.log(element)
    if (element && !observer) {
      setObserver(lookForDarkLogoScroll(".App-header", setAdditionalClassName));
    }
  }, [observer]);

  return (
    <div className={`timeline ${additionalClassName}`}>
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
