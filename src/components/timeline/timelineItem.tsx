import React, { useContext, useCallback } from 'react';
import './style.scss';
import keyIcon from '../../icons_assets/Star.svg';
import { Context } from '../../contextProvicer';
import Badge from './Badge';

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

  let description = content || 'No details available';

  let wordsAmount = 17;
  if (window.innerWidth >= 1200) {
    wordsAmount = 30;
  }

  if (description.split(' ').length > wordsAmount)
    description = description.split(' ').slice(0, wordsAmount).join(' ') + '...';

  return (
    <div className='timeline-item'>
      <div className='timeline-icon'>
        <img src={keyIcon} alt={'key'} />
      </div>
      <div className={`timeline-content ${props.right ? 'right' : ''}`}>
        <p className='timeline-content-date'>{title}</p>
        <Badge success={success} />
        <p className='description'>{description}</p>
        {content && (
          <button className='link' onClick={doClick}>
            See more info
          </button>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
