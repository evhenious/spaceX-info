import React from 'react';
import './badge-style.scss';

interface Props {
  success: boolean; // can be undefined or null for scheduled missions in future
}

const Badge: React.FC<Props> = ({ success }) => {
  let text = 'Planned';
  let spanClass = 'planned';

  if (success) {
    text = 'Successful';
    spanClass = 'fine';
  }

  if (success === false) {
    spanClass = 'not-fine';
    text = 'Failed';
  }

  return <span className={spanClass}>{text}</span>;
};

export default Badge;
