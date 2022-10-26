import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <>
      <div
        className={`${styles.sidebarCnt} container-fluid overflow-hidden d-none d-md-block position-fixed start-0 top-0`}
      >
        <div className="vh-100 overflow-auto w-100">
          <div className={`${styles.navbarContainer} vh-100 pt-5`}>
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start">
              <NavLink
                to="/home"
                className="d-flex align-items-center pb-sm-3 mb-3 me-md-auto text-decoration-none"
              >
                <span className={`${styles.brandName} fs-1 ps-4`}>
                  CarBook
                </span>
              </NavLink>
              <ul
                className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="w-100">
                  <NavLink to="/home" className="nav-link mb-2 fs-5">
                    <i className="fa-solid fa-house me-2" />
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  
      </nav>
    </>
  );
};

export default Sidebar;