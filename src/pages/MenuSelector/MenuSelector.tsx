import React from 'react';
import { Link } from 'react-router-dom';
import { imgurContext, ImgurContext } from '../../context/imgur/ImgurContext';
import { logout } from '../../context/imgur/ImgurActions';
import './MenuSelector.scss'

export const MenuSelector: React.FC = () => {
      const {dispatch} = React.useContext<ImgurContext>(imgurContext)
      return (
            <div className="menu-wrapper">
                 <ul className="menu-list-container">
                       <li className="menu-item-selector"><Link to="/game">Play</Link></li>
                       <li className="menu-item-selector"><Link to="/list">Challenge List</Link></li>
                       <li className="menu-item-selector"><Link to="/score">Your Local Score</Link></li>
                       <li className="menu-item-selector" onClick={() => dispatch(logout())}><a href="/login">Logout</a></li>
                 </ul> 
            </div>
      )
}