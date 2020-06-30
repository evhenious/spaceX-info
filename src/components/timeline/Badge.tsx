import React from 'react';
import './badge-style.scss';

interface Props {
  success: boolean;
}

const Badge: React.FC<Props> = ({success}) => {
  const spanClass = success ? 'fine' : 'not-fine';
  const text = success ? 'Successful' : 'Failed';

  return <span className={spanClass}>{text}</span>
}

export default Badge;
