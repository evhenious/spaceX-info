import React from 'react';
import { LAUNCH_ORDER } from '../timelineContainer';
import './style.scss';

interface Props {
  order: LAUNCH_ORDER;
  changeOrder(): void;
}

const ServiceHeader: React.FC<Props> = ({ order, changeOrder }) => {
  const labelOrderText = order === LAUNCH_ORDER.ASC ? 'Oldest first' : 'Latest first';
  return (
    <div className='service-header'>
      <div>Current Order: {labelOrderText}</div>
      <span id='order' className='order-span' onClick={changeOrder}>
        Reverse Timeline
      </span>
    </div>
  );
};

export default ServiceHeader;
