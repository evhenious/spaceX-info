import React from 'react';
import './style.scss';
import keyIcon from '../../icons/key.svg';

interface Props {
  title: string;
  content: string;
  right?: boolean;
}

const TimelineItem = (props: Props) => {
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
          <a className='link' onClick={() => {console.log('useless click now')}}>Details...</a>
        }
      </div>
    </div>
  );
};

export default TimelineItem;
