import React, { Component } from 'react';
import _ from 'lodash';
import { getCountryName, getFlagsImages, getPrefix } from '../utils/prefixes';

class CountryPrefixSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: props.defaultValue,
      active: false
    };
  }

  setPrefix(newPrefix) {
    this.setState((state, props) => ({
      prefix: newPrefix
    }));
  }

  setActive(newActive) {
    this.setState((state, props) => ({
      active: newActive
    }));
  }

  onClickSelect(event, value) {
    event.preventDefault();
    this.setActive(value);
  }

  onClickOption(event, value, onChange) {
    event.preventDefault();
    onChange(value);
    this.setActive(false);
    this.setPrefix(value);
  }

  clickOutside() {
    document.addEventListener('click', (event) => this.closeWhenClickOutside(event));
  };
  
  closeWhenClickOutside (event) {
    if ( !event.target.closest('.formField-select') ) {
      this.setActive(false);
    }
  };

  componentDidMount() {
    this.clickOutside();
  }

  render() {
    // The default value is set by a prop instead of using the "selected" 
    // value on the option tag. This was written on that form because
    // the React documentation recommends using a "defaultValue" value
    // on the select tag instead of the "selected" value, as can be 
    // seen on the "The select tag" section here:
    // https://reactjs.org/docs/forms.html
    const { defaultValue='', countryCodes=[], onChange=(value)=>{} } = this.props;
    const flagsImages = getFlagsImages(countryCodes);

    // The select tag can't be fully controlled by css. So, to make
    // the flags work on the select options, a new dropdown was made
    // using non-semantic html (div and span tags), as was recommended
    // on the MDN documentation: 
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#Styling_with_CSS
    return (
      <div className="formField-select">
        <select name="prefix" onChange={onChange} value={this.state.prefix}>
          {countryCodes.map((countryCode) => {
            return(
              <option key={`${countryCode}option`} value={getPrefix(countryCode)}>{getPrefix(countryCode)}</option>
            );
          })}
        </select>
        <div className="custom-select" onClick={(event) => this.onClickSelect(event, !this.state.active)}>+{this.state.prefix}</div>
        <div className={`custom-arrow${this.state.active ? ' active' : ''}`} />
        
        <label htmlFor="prefix">Prefix</label>
        <div className={`custom-dropdown-options${this.state.active ? ' active' : ''}`} >
            {countryCodes.map((countryCode) => {
              return(
                <div className="custom-option" key={`${countryCode}span`} onClick={(event) => this.onClickOption(event, getPrefix(countryCode), onChange)}>
                  <img className='custom-option-flag' src={_.get(flagsImages, countryCode)} alt={getCountryName(countryCode)} />
                  <span className='custom-option-name'>{getCountryName(countryCode)}</span>
                  <span className='custom-option-prefix'>+{getPrefix(countryCode)}</span>
                </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default CountryPrefixSelect;
