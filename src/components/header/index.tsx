import React from 'react';
import logo from '../../icons/SpaceX-Logo.svg';
import arrowDown from '../../icons/arrow-down-sign-to-navigate.svg';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getSummary } from '../apollo/queries';
import { iGeneralInfo } from '../apollo/interface';

const Header = () => {
  const { errors, data, loading } = useQuery(getSummary) as iGeneralInfo;
  if(errors) {
    console.log(errors);
    return null;
  }

  let headerRef: HTMLElement | null;

  const scrollToList = () => {
    window.scrollTo({ top: headerRef?.clientHeight, behavior: 'smooth' });
  };

  return (
    <header className='App-header' ref={ref => {headerRef = ref}}>
      <div className={'disclaimor'}>* All rights to logo and content belong to it's respectable owners. The page created just for fun and training purposes.</div>
      <img src={logo} className='App-logo' alt='logo' />
      {loading ? '' : <p className={'App-header-summary'} >{data.company.summary}</p>}
      {loading ? '' : <img className={'App-scroll-sign'} src={arrowDown} alt={'scroll down'} onClick={scrollToList} />}
    </header>
  );
};

export default Header;
