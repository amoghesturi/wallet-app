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
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnFocus() {
    this.setState({ focussed: true });
  }

  handleOnBlur() {
    this.setState({ focussed: false });
  }

  handleOnChange({ input }) {
    input.onChange('AAA');
  }

  render() {
    const { touched, error } = this.props.meta;
    const activeClass = this.state.focussed ? 'active' : '';
    return (
      <div className={`${this.props.className} ${activeClass}`}>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
        />
        { touched && error && <span>Error</span> }
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.string,
  }),
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
