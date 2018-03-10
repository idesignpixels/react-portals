import React from 'react';
import logo from '../idplogo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-header-wrapper wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <a rel="author" href="http://idesignpixels.com">
            <h1 className="App-title">idesignpixels.com</h1>
          </a>
        </div>
      </header>
    );
  }
}
