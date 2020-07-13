import React from 'react';
import { useImgur } from '../../context/imgur/ImgurHooks';
import { ImgurData } from '../../types/imgur';
import { Card } from '../../components/Card/Card';
import './Game.scss';
import { useCounter } from '../../utils/countDown';


export const Game = () => {
      const [state, getImages] = useImgur();
      const [card, setCard] = React.useState<ImgurData>();
      const [count, starCountDown] = useCounter();
      React.useEffect( () => {
            getImages()
      }, []);
      return (
            <div className="game-wrapper">
                  <Card
                        flip={!!card}
                        imgUrl={card?.link}
                        count={count}
                        onStart={() => {
                              starCountDown();
                              setCard(state.data && state.data[0])     
                        }}
                        onFinish={() => {
                             setCard(undefined) 
                        }}
                  />
            </div>
      )
}