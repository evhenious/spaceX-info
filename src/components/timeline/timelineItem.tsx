import React from 'react';
import './style.scss';
import keyIcon from '../../icons/key.svg';

interface Props {
  title: string;
  content: string;
  right?: boolean;
}

const TimelineItem = (props: Props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src={keyIcon} />
      </div>
      <div className={`timeline-content ${props.right ? 'right' : ''}`}>
        <p className="timeline-content-date">{props.title}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
