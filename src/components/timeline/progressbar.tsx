import React from 'react';
import './style.scss';

interface Props {
  height: string;
}

const ProgressBar: React.FC<Props> = (props) => {
  const style = {
    '--height': props.height || '1px'
  };

  return <div className={'progress'} style={style as any}/>
}

export default ProgressBar;