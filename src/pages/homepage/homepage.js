import React from 'react';
import Directory from '../../components/directory/directory.component';
import './Homepage.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory></Directory>
  </div>
);

export default HomePage;