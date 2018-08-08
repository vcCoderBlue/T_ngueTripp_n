import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/T_ngueTripp_n/" exact activeStyle={{ color: 'navy' }}>Home</NavLink> <br />
      <NavLink to="/T_ngueTripp_n/spanish" activeStyle={{ color: 'navy' }}>Spanish</NavLink> <br />
      <NavLink to="/T_ngueTripp_n/french" activeStyle={{ color: 'navy' }}>French</NavLink>
    </div>
  );
};

export default Navigation;
