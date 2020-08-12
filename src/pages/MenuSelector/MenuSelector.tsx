import React from 'react';
import { Link } from 'react-router-dom';
import { imgurContext, ImgurContext } from '../../context/imgur/ImgurContext';
import { logout } from '../../context/imgur/ImgurActions';
import './MenuSelector.scss';

export const MenuSelector = () => {
      const {dispatch} = React.useContext<ImgurContext>(imgurContext)
      return (
            <div className="menu-selector-wrapper">
                  <ul className="menu-selector-list">
                        <li className="menu-selector-item"><Link to="/game">Play</Link></li>
                        <li className="menu-selector-item"><Link to="/list">Challenge List</Link></li>
                        <li className="menu-selector-item"><Link to="/score">Your Local Score</Link></li>
                        <li
                              className="menu-selector-item"
                              onClick={() => dispatch(logout())}>
                                    <a href="/logout">Logout</a>
                        </li>
                  </ul>
            </div>
      )
}