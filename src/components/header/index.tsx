import React from 'react';
import logo from '../../icons_assets/SpaceX-Logo-Black.svg';
import arrowDown from '../../icons_assets/arrow-down-sign-to-navigate.svg';
import './style.scss';

import { useQuery } from 'react-apollo-hooks';
import { getSummary } from '../apollo/queries';
import { iGeneralInfo } from '../apollo/interface';

const Header = () => {
  const { error, data, loading } = useQuery(getSummary) as iGeneralInfo;
  if (error) {
    console.log(error);
  }

  let headerRef: HTMLElement | null;

  const scrollToList = () => {
    window.scrollTo({ top: headerRef?.clientHeight, behavior: 'smooth' });
  };

  return (
    <header className='App-header' ref={ref => {headerRef = ref}}>
      <div className={'disclaimor'}>* All rights to logo and content belong to it's respectable owners. The page created just for fun and training purposes.</div>
      <img src={logo} className='App-logo' alt='logo' />
      {(loading || error) ? '' : <p className={'App-header-summary'} >{data.company.summary}</p>}
      {(loading || error) ? '' : <img className={'App-scroll-sign'} src={arrowDown} alt={'scroll down'} onClick={scrollToList} />}
    </header>
  );
};

export default Header;
