import React from 'react';
import './style.scss';

interface Props {
  title: string;
  content: string;
  right?: boolean;
}

const TimelineItem = (props: Props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M24 11.5c0 3.613-2.951 6.5-6.475 6.5-2.154 0-4.101-1.214-5.338-3h-2.882l-1.046-1.013-1.302 1.019-1.362-1.075-1.407 1.081-4.188-3.448 3.346-3.564h8.841c1.145-1.683 3.104-3 5.339-3 3.497 0 6.474 2.866 6.474 6.5zm-10.691 1.5c.98 1.671 2.277 3 4.217 3 2.412 0 4.474-1.986 4.474-4.5 0-2.498-2.044-4.5-4.479-4.5-2.055 0-3.292 1.433-4.212 3h-9.097l-1.293 1.376 1.312 1.081 1.38-1.061 1.351 1.066 1.437-1.123 1.715 1.661h3.195zm5.691-3.125c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
        </svg>
      </div>
      <div className={`timeline-content ${props.right ? 'right' : ''}`}>
        <p className="timeline-content-date">{props.title}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
