import React from 'react'
import Header from '../Elements/Header';
import Overview from '../Elements/Overview';
import Alerts from '../Elements/Alerts';
import Financial from '../Elements/Financial';

const Main = () => {
  return (
    <div className='main-content'>
        <Header/>
        <Overview/>
        <Alerts/>
        <Financial/>
    </div>
  )
}

export default Main