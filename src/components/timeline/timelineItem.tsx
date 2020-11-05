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

const wordsAmount = 17;
const wordsAmountWide = 30;
const wideScreenPixels = 1200;

const TimelineItem: React.FC<Props> = (props) => {
  const { setLaunchID } = useContext(Context);
  const { launchID, success, content, title } = props;

  const doClick = useCallback(() => {
    setLaunchID && setLaunchID(launchID);
  }, [launchID, setLaunchID]);

  let description = content || 'No details available';

  let usedWordsAmount = wordsAmount;
  if (window.innerWidth >= wideScreenPixels) {
    usedWordsAmount = wordsAmountWide;
  }

  if (description.split(' ').length > usedWordsAmount)
    description = description.split(' ').slice(0, usedWordsAmount).join(' ') + '...';

  return (
    <div className='timeline-item'>
      <div className='timeline-icon'>
        <img src={keyIcon} alt={'STAR'} />
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
