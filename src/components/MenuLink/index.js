import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default function MenuLink({ to, children }) {
  const match = useRouteMatch({
    path: to,
    exact: true
  });

  return (
    <MenuItem className={match ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </MenuItem>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired
};