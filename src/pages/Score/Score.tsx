import React from 'react';
import './Score.scss';
import { useHistory } from 'react-router';
import { useImgur } from '../../context/imgur/ImgurHooks';

export const Score = () => {
      const history = useHistory()
      const [state] = useImgur()
      return (
            <div onClick={() => history.push('/menu')} className="score-wrapper">
                  <div className="score-circle"></div>
                  <div className="score-value">
                        <p><b>YOUR SCORE</b></p>
                        <p>{state.score || 0}PTS</p>
                  </div>
            </div>
      )
}