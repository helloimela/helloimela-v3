import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.scss';

export default () => {
  const location = useLocation();
  const isIndex = location.pathname === '/index' || location.pathname === '/'
  return (
    <div className="header">
      <h1>helloimela.com</h1>
      {
        !isIndex && 
        <Link to="" className="back-nav">Back</Link>
      }
    </div>
  );
};
