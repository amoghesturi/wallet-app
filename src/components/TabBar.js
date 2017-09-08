import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TabBar = props => (
  <div className="tab-bar">
    {
      props.items.map(item => (
        <NavLink
          key={item.id}
          className="tab-bar-item"
          activeClassName="tab-bar-item-active"
          to={item.to}
        >
          {item.title}
        </NavLink>
      ))
    }
  </div>
);

TabBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    to: PropTypes.string,
  })),
};

TabBar.defaultProps = {
  items: [],
};

export default TabBar;
