import React, { Component } from 'react';
import cabifyLogo from '../../images/cabify-logo.svg';
import '../../styles/App.css';
import CustomInput from '../customInput/customInput';
import CountryPrefixSelect from '../countryPrefixSelect/countryPrefixSelect'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'Laura Sánchez',
      jobdescription: 'Fronte',
      countryCodes: ['ES', 'CL', 'PE', 'MX', 'CO'],
      prefix: '34',
      phonenumber: '',
      email: '',
      website: 'www.cabify.com',
      address: 'Calle Pradillo 42. CP: 28002. Madrid'
    };
  }

  setFullname(newFullname) {
    this.setState((state, props) => ({
      fullname: newFullname
    }));
  }

  setJobdescription(newJobdescription) {
    this.setState((state, props) => ({
      jobdescription: newJobdescription
    }));
  }

  setPrefix(newPrefix) {
    this.setState((state, props) => ({
      prefix: newPrefix
    }));
  }

  setPhonenumber(newPhonenumber) {
    this.setState((state, props) => ({
      phonenumber: newPhonenumber
    }));
  }

  setEmail(newEmail) {
    this.setState((state, props) => ({
      email: newEmail
    }));
  }

  setWebsite(newWebsite) {
    this.setState((state, props) => ({
      website: newWebsite
    }));
  }

  setAddress(newAddress) {
    this.setState((state, props) => ({
      address: newAddress
    }));
  }

  hasEmptyValue() {
    console.log()
    return (
      this.state.fullname === '' ||
      this.state.jobdescription === '' ||
      this.state.prefix === '' ||
      this.state.phonenumber === '' ||
      this.state.email === '' ||
      this.state.website === '' ||
      this.state.address === ''
    );
  }

  render() {
    const {
      fullname,
      jobdescription,
      prefix,
      phonenumber,
      email,
      website,
      address
    } = this.state;

    return (
      <div className="mainWrapper row">
        <article className="businessCard col col6">
          <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
              <img src={cabifyLogo} alt="Cabify" />
            </a>
          </figure>
          <h1 className="title-main">Request your business card</h1>
          <div className="businessCard-cards">
            <div className="businessCard-cardBack" />
            <div className="businessCard-cardFront">
              <div>
                <p className="businessCard-cardFront-title">{fullname}</p>
                <p className="businessCard-cardFront-subtitle">{jobdescription}</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">+{prefix} </p>
                <p className="businessCard-icon-email">{email}</p>
                <p className="businessCard-icon-website">{website}</p>
                <p className="businessCard-icon-address">{address}</p>
              </div>
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <CustomInput 
                name='fullname'
                label='Full name'
                type='text'
                defaultValue='Laura Sánchez'
                alwaysActive={false}
                disabled={false}
                className='col col12'
                onChange={(value) => this.setFullname(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationMedium">
              <CustomInput 
                name='jobdescription'
                label='Job description'
                type='text'
                defaultValue='Fronte'
                alwaysActive={false}
                disabled={false}
                className='col col12'
                onChange={(value) => this.setJobdescription(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
                <CountryPrefixSelect 
                  countryCodes={this.state.countryCodes}
                  defaultValue='34'
                  onChange={(value) => this.setPrefix(value)}
                />
              </div>
              <CustomInput 
                name='phonenumber'
                label='Phone number'
                type='tel'
                defaultValue=''
                alwaysActive={false}
                disabled={false}
                className='col col9'
                onChange={(value) => this.setPhonenumber(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationMedium">
              <CustomInput 
                name='email'
                label='Email'
                type='email'
                defaultValue=''
                alwaysActive={false}
                disabled={false}
                className='col col12'
                onChange={(value) => this.setEmail(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationMedium">
              <CustomInput 
                name='website'
                label='Website'
                type='text'
                defaultValue='www.cabify.com'
                alwaysActive={true}
                disabled={true}
                className='col col12'
                onChange={(value) => this.setWebsite(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationMedium">
              <CustomInput 
                name='address'
                label='Address'
                type='text'
                defaultValue='Calle Pradillo 42. CP: 28002. Madrid'
                alwaysActive={false}
                disabled={false}
                className='col col12'
                onChange={(value) => this.setAddress(value)}
                checkValid={(value) => {true}}
              />
            </div>
            <div className="row row-separationHuge">
              <input className={`button button-full button-primary${this.hasEmptyValue() ? ' disabled' : ''}`} disabled={this.hasEmptyValue()} type="submit" value="Request" />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
