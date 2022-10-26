import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
  
  );
};

export default Sidebar;
