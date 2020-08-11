import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSelector.scss'

export const MenuSelector: React.FC = () => {
      return (
            <div>
                 <ul>
                       <li><Link to="/game">Play</Link></li>
                       <li><Link to="/list">Challenge List</Link></li>
                       <li><Link to="/score">Your Local Score</Link></li>
                       <li>Logout</li>
                 </ul> 
            </div>
      )
}