import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => (
      <div className="header-wrapper">
            <Link to="/menu">
                  <div className="header-menu">
                        <hr/>
                        <hr/>
                        <hr/>
                  </div>
            </Link>
      </div>
)