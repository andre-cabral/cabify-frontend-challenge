import React, { Component } from 'react';
import _ from 'lodash';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      active: false
    };
  }

  setValue(newValue) {
    this.setState((state, props) => ({
      value: newValue
    }));
  }

  setActive(newActive) {
    this.setState((state, props) => ({
      active: newActive
    }));
  }

  onChange(event, value, onChange) {
    event.preventDefault();
    onChange(value);
    this.setValue(value);
  }

  render() {
    const { 
      name='input',
      label='Input',
      type='text',
      defaultValue='', 
      alwaysActive=false,
      disabled=false,
      className='',
      onChange=(value)=>{},
      checkValid=(value) => {true}
    } = this.props;

    return (
      <div className={`formField-input${this.state.value !== '' || this.state.active || alwaysActive ? ' active' : ''}${this.state.active ? ' focus' : ''}${disabled ? ' disabled' : ''} ${className}`}>
        <div className="input">
          <input type={type} disabled={disabled} name={name} defaultValue={defaultValue} onFocus={() => {this.setActive(true)}} onBlur={() => {this.setActive(false)}} onChange={(event) => this.onChange(event, event.target.value, onChange)} />
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default CustomInput;
