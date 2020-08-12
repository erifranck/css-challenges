import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
      return (
            <div className="header-wrapper">
                  <Link to="/menu">
                        <div className="header-menu-item">
                              <hr/>
                              <hr/>
                              <hr/>
                        </div>
                  </Link>
            </div>
      )
}