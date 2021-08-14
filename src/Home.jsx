import React from 'react';
import Common from './Common';
import web from './images/3046-me-at-office.gif';
// This is wrong path import web from '../src/component3/FirstWebsite/images/me-at-office.mp4';

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;

/* <div className="container-fluid nav_bg">
  <div className="row">
    <div className="col-10 mx-auto">
          
    </div>
  </div>
</div> */
