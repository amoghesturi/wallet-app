import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focussed: false,
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnFocus() {
    this.setState({ focussed: true });
  }

  handleOnBlur() {
    this.setState({ focussed: false });
  }

  render() {
    const activeClass = this.state.focussed ? 'active' : '';
    return (
      <input
        type={this.props.type}
        className={`${this.props.className} ${activeClass}`}
        placeholder={this.props.placeholder}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
};

export default Input;
