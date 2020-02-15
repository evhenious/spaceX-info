import React from 'react';
import './launch.scss';
import { iLaunchData } from '../apollo/interface';

interface Props {
  data: iLaunchData;
  onClose: Function;
}

const LaunchMarkup: React.FC<Props> = (props) => {
  const { onClose, data } = props;
  const { links, rocket, launch_site, launch_success } = data;

  return <div className={'modal'}>
    <div className={'close'} onClick={() => onClose('')}>X</div>
    <img src={links.mission_patch_small} />
  </div>
}

export default LaunchMarkup;
