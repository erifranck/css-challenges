import React from 'react';
import './MiniCard.scss'

interface Props { 
      image: string;
}
export const MiniCard: React.FC<Props> = (props) => {
      return (
            <div className="mini-card">
                  <img src={props.image} alt=""/>
            </div>
      )
}
