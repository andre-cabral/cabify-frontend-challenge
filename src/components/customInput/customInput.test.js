import React from 'react';
import ReactDOM from 'react-dom';
import CustomInput from './customInput';

const testState = {
  value: 'testValue',
  active: false,
  name: 'inputTest',
  label: 'Input Test',
  type: 'email',
  defaultValue: 'Input Test Value',
  alwaysActive: true,
  disabled: true,
  className: 'testClass',
};

const testOnChange = (value) => {value};
const testCheckValid = (value) => {true};

it('renders CustomInput without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CustomInput props working', () => {
  const div = document.createElement('div');
  const dom = ReactDOM.render(<CustomInput 
    name={testState.name}
    label={testState.label}
    type={testState.type}
    defaultValue={testState.defaultValue}
    alwaysActive={testState.alwaysActive}
    disabled={testState.disabled}
    className={testState.className}
    onChange={testOnChange}
    checkValid={testCheckValid}
  />, div);

  expect(dom.props.name).toEqual(testState.name);
  expect(dom.props.label).toEqual(testState.label);
  expect(dom.props.type).toEqual(testState.type);
  expect(dom.props.defaultValue).toEqual(testState.defaultValue);
  expect(dom.props.alwaysActive).toEqual(testState.alwaysActive);
  expect(dom.props.disabled).toEqual(testState.disabled);
  expect(dom.props.className).toEqual(testState.className);
  expect(dom.props.onChange).toEqual(testOnChange);
  expect(dom.props.checkValid).toEqual(testCheckValid);
});