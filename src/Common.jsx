import React from 'react';
import { NavLink } from 'react-router-dom';
// This is wrong path import web from '../src/component3/FirstWebsite/images/me-at-office.mp4';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className=" mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Harsh Vadadoriya</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      type="button"
                      class="btn btn-outline-success rounded-pill"
                      data-mdb-ripple-color="dark"
                    >
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="position-relative mt-0">
                <img
                  src={props.imgsrc}
                  className="position-absolute top-5 end-0 "
                  alt="home img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
