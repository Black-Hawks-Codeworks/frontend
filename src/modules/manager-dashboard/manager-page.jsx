import styles from './manager-page.module.css';

import React from 'react';
import Sidebar from './components/sidebar';
import HomeRightBar from './components/HomeRightBar/home-right-bar';


export default function ManagerPage(){


  return(

    <div className={styles.mainContainer}>
      {/* <Sidebar/> */}
      <HomeRightBar/>
    </div>

  );

}