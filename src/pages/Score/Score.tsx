import React from 'react';
import { useHistory } from 'react-router';
import './Score.scss';

export const Score = () => {
      const history = useHistory()
      return (
            <div className="score-wrapper" onClick={() => history.push('/menu')}>
                  <div className="score-circle"></div>
                  <div className="score-value">
                        <p>Your Score</p>
                        <p>300pts</p>
                  </div>
            </div>
      )
}