import React, { useEffect, useState } from 'react';
import './launch.scss';
import { iLaunchData } from '../apollo/interface';

interface Props {
  data?: iLaunchData | any;
  onClose(id: string): void;
}

const LaunchMarkup: React.FC<Props> = (props) => {
  const { onClose, data = {} } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const { links, rocket, launch_site, details } = data;

  useEffect(() => {
    if (!links.mission_patch_small) {
      setIsLoaded(true);
    }
  }, [links]);

  if (Object.keys(data).length === 0) return null;

  return (
    <div className={'modal'}>
      <div className={'blur'}>
        <div className={'close'} onClick={() => onClose('')}>
          X
        </div>
        <div className={'content'}>
          {links.mission_patch_small ? (
            <img
              src={links.mission_patch_small}
              onLoad={() => setIsLoaded(true)}
              className={isLoaded ? '' : 'loading'}
              alt='Mission Patch'
            />
          ) : (
            <div className={'no-patch-info'}>No mission patch</div>
          )}
          {isLoaded ? null : <div className={'spinner'} />}
          <div className={'info'}>
            <div>
              <u>Launch site:</u> {launch_site.site_name_long}
            </div>
            <div>
              <u>Rocket:</u> {rocket.rocket_name}, type: {rocket.rocket_type}
            </div>
            <div className={'details'}>{details}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchMarkup;
