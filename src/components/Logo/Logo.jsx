import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'images/logo.svg';
import Icon from 'components/Icon';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <Icon glyph={logo}/>
    </Link>
  );
};

export default Logo;