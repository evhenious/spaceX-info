import React, { useContext, useState } from 'react';
import { Context } from '../../contextProvicer';
import { useQuery } from 'react-apollo-hooks';
import { getLaunchData } from '../apollo/queries';
import { iQueryLaunchData, iLaunchData } from '../apollo/interface';
import LaunchMarkup from './markup';

const LaunchDetail: React.FC = () => {
  const { launchID, setLaunchID } = useContext(Context);
  const params = {
    suspend: true,
    variables: { id: launchID },
    notifyOnNetworkStatusChange: true,
    skip: launchID === ''
  };

  const [launchData, setLaunchData] = useState<iLaunchData>();
  const [prevLaunchID, setPrevLaunchID] = useState('');

  const { error, data } = useQuery(getLaunchData, params) as iQueryLaunchData;

  if (launchID === '') return null;

  if(error) {
    console.error(error);
    return null;
  }

  if(prevLaunchID !== launchID) {
    setPrevLaunchID(launchID);
    setLaunchData(data.launch);
  }

  return <LaunchMarkup data={launchData} onClose={setLaunchID}/>;
}

export default LaunchDetail;
