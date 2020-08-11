import React from 'react';
import './MiniCard.scss'

interface Props {
      image: string;
}
export const MiniCard: React.FC<Props> = (props) => (
      <div className="minicard-wrapper">
            <img src={props.image} alt=""/>
      </div>
)