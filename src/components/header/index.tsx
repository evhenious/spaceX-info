import React from 'react';
import logo from '../../icons/SpaceX-Logo.svg';
import arrowDown from '../../icons/arrow-down-sign-to-navigate.svg';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getSummary } from '../apollo/queries';

interface iQueryLaunches {
  errors: any;
  loading: boolean;
  data: {
    company: {
      summary: string
    }
  }
}

const Header = () => {
  const { errors, data, loading } = useQuery(getSummary) as iQueryLaunches;
  if(errors) {
    console.log(errors);
    return null;
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {loading ? '' : <p className={'App-header-summary'} >{data.company.summary}</p>}
      {loading ? '' : <img className={'App-scroll-sign'} src={arrowDown}/>}
    </header>
  );
};

export default Header;
