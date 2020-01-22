import React from 'react';
import logo from '../../SpaceX-Logo.svg';
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
    </header>
  );
};

export default Header;
