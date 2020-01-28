import React, { useContext, useCallback } from 'react';
import './style.scss';
import keyIcon from '../../icons/key.svg';
import { Context } from './timelineContainer';

interface Props {
  title: string;
  content: string;
  launchID: string;
  right?: boolean;
}

const TimelineItem = (props: Props) => {
  const { setLaunchID } = useContext(Context);
  const { launchID } = props;

  const doClick = useCallback(() => {
    setLaunchID && setLaunchID(launchID);
  }, [launchID, setLaunchID]);

  const description = props.content || 'no details available';
  return (
    <div className='timeline-item'>
      <div className='timeline-icon'>
        <img src={keyIcon} alt={'key'} />
      </div>
      <div className={`timeline-content ${props.right ? 'right' : ''}`}>
        <p className='timeline-content-date'>{props.title}</p>
        <p>{description}</p>
        { props.content &&
          <a className='link' onClick={doClick}>Details...</a>
        }
      </div>
    </div>
  );
};

export default TimelineItem;
