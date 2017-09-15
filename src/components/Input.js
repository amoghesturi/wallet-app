import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focussed: false,
      value: '',
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnFocus() {
    this.setState({ focussed: true });
    this.props.input.onFocus();
  }

  handleOnBlur() {
    this.setState({ focussed: false });
    this.props.input.onBlur();
  }

  render() {
    const { touched, error } = this.props.meta;
    const { onChange } = this.props.input;
    const activeClass = this.state.focussed ? 'active' : '';
    return (
      <div className={`${this.props.className} ${activeClass}`}>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={onChange}
        />
        { touched && error && <span>{error}</span> }
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  }).isRequired,
};

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  meta: {
    touched: false,
    error: '',
  },
};

export default Input;
