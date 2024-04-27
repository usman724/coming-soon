import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import './App.css';
import Logo from './logo_details.png';
import Modal from './modal.png';

class App extends React.Component {
  render = () => {
    return (
      <div className='app-container'>
        <div className='card'>
          <div className='header'>
            <div className='logo'>
              <img src={Logo} alt='Logo' />
            </div>
            <div className='social'>
              <a href='https://web.facebook.com/mzmartz' title='Facebook' target='_blank' rel='noopener noreferrer'>
                <IconFacebook className='icon' />
              </a>
            </div>
          </div>
          <div className='content'>
            <img src={Modal} alt='Modal' />
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
            <a href='mailto:support@mzmarts.com'>
              <div className='cta'>Send us an email</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
