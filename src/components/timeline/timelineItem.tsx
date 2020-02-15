import React, { useContext, useCallback } from 'react';
import './style.scss';
import keyIcon from '../../icons/key.svg';
import { Context } from '../../contextProvicer';

interface Props {
  title: string;
  content: string;
  launchID: string;
  right?: boolean;
  success: boolean;
}

const TimelineItem: React.FC<Props> = (props) => {
  const { setLaunchID } = useContext(Context);
  const { launchID, success, content, title } = props;

  const doClick = useCallback(() => {
    setLaunchID && setLaunchID(launchID);
  }, [launchID, setLaunchID]);

  let description = (content || 'NoFind details available');
  if (description.split(' ').length > 17)
    description = description.split(' ').slice(0, 17).join(' ') + '...';

  return (
    <div className='timeline-item'>
      <div className='timeline-icon'>
        <img src={keyIcon} alt={'key'} />
      </div>
      <div className={`timeline-content ${props.right ? 'right' : ''}`}>
        <p className='timeline-content-date'>{title}</p>
        <p>{`${!success ? 'Not' : ''} Successful`}</p>
        <p>{description}</p>
        { content &&
          <a className='link' onClick={doClick}>See more info</a>
        }
      </div>
    </div>
  );
};

export default TimelineItem;
