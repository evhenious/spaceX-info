import React, { useState } from 'react';
import './launch.scss';
import { iLaunchData } from '../apollo/interface';

interface Props {
  data: iLaunchData;
  onClose: Function;
}

const LaunchMarkup: React.FC<Props> = (props) => {
  const { onClose, data } = props;
  const { links, rocket, launch_site, details } = data;

  const [isLoaded, setIsLoaded] = useState(false);

  return <div className={'modal'}>
    <div className={'blur'}>

      <div className={'close'} onClick={() => onClose('')}>X</div>
      <div className={'content'}>
        <img src={links.mission_patch_small} onLoad={() => setIsLoaded(true)} className={isLoaded ? '' : 'loading'}/>
        {isLoaded ? null : <div className={'spinner'} />}
        <div className={'info'}>
          <div><u>Launch site:</u> {launch_site.site_name_long}</div>
          <div><u>Rocket:</u> {rocket.rocket_name}, type: {rocket.rocket_type}</div>
          <div className={'details'}>{details}</div>
        </div>
      </div>

    </div>
  </div>
}

export default LaunchMarkup;
