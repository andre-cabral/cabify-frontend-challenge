import React, { Component } from 'react';
import _ from 'lodash';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      active: false,
      invalid: false
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

  setInvalid(newInvalid) {
    this.setState((state, props) => ({
      invalid: newInvalid
    }));
  }

  onChange(event, value, onChange, checkValid) {
    event.preventDefault();
    onChange(value);
    this.setValue(value);

    if(this.state.invalid) {
      this.setInvalid(!checkValid(value));
    }
  }

  onBlur(event, value, checkValid) {
    this.setActive(false);
    this.setInvalid(!checkValid(value));
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
      checkValid=(value) => {return true}
    } = this.props;

    return (
      <div className={`formField-input${this.state.value !== '' || this.state.active || alwaysActive ? ' active' : ''}${this.state.active ? ' focus' : ''}${this.state.invalid ? ' invalid' : ''}${disabled ? ' disabled' : ''} ${className}`}>
        <div className="input">
          <input type={type} disabled={disabled} name={name} defaultValue={defaultValue} onFocus={() => {this.setActive(true)}} onBlur={(event) => this.onBlur(event, event.target.value, checkValid)} onChange={(event) => this.onChange(event, event.target.value, onChange, checkValid)} />
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default CustomInput;
