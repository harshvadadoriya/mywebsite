import React from 'react';
import Common from './Common';
import web from './images/About.gif';

// This is wrong path import web from '../src/component3/FirstWebsite/images/me-at-office.mp4';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
