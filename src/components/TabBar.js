import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TabBar = props => (
  <div className="tab-bar">
    {
      props.items.map(item => (
        <Link className="tab-bar-item" to="{item.to}">{item.title}</Link>
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
