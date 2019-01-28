import React from 'react';
import ReactDOM from 'react-dom';
import CountryPrefixSelect from './countryPrefixSelect';

const testState = {
  countryCodes: ['ES', 'CL', 'PE', 'MX', 'CO'],
  prefix: '34',
};

const testOnChange = (value) => {value};

it('renders CountryPrefixSelect without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountryPrefixSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CountryPrefixSelect props working', () => {
  const div = document.createElement('div');
  const dom = ReactDOM.render(<CountryPrefixSelect 
    countryCodes={testState.countryCodes}
    defaultValue={testState.prefix}
    onChange={testOnChange} 
  />, div);

  expect(dom.props.countryCodes).toEqual(testState.countryCodes);
  expect(dom.props.defaultValue).toEqual(testState.prefix);
  expect(dom.props.onChange).toEqual(testOnChange);
});