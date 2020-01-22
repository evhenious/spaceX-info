import React, { Suspense } from 'react';
import logo from '../../SpaceX-Logo.svg';
import './style.scss';

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

interface iQueryLaunches {
  errors: any;
  data: {
    company: {
      summary: string
    }
  }
}

const query = gql`
  {
    company {
      summary
    }
  }
`;

const Header = () => {
  const { errors, data } = useQuery(query, {suspend: true}) as iQueryLaunches;
  if(errors) {
    console.log(errors);
    return null;
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>{data.company.summary}</p>
    </header>
  );
};

const Suspended = () => <Suspense fallback={<div>loading</div>}>
  <Header />
</Suspense>;

export default Suspended;
