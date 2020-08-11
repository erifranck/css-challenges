import React from 'react';
import { useImgur } from '../../context/imgur/ImgurHooks';
import { ImgurData } from '../../types/imgur';
import { Card } from '../../components/Card/Card';
import { useCounter, CounterFunction } from '../../utils/countDown';
import { randomSelector } from '../../utils/randomSelector';
import './Game.scss';

export const NUMBER_OF_LEVELS = 3;
export const BASE_TIME = 10;
const BASE_SCORE = 1000;

export const Game = () => {
      const [state, getImages] = useImgur();
      const [card, setCard] = React.useState<ImgurData>();
      const [counterFunction, setCounter] = React.useState<CounterFunction>();
      const [cardSelected, setCardSelected] = React.useState<number>();
      const [count, starCountDown] = useCounter();
      const selectedTimeLimit = NUMBER_OF_LEVELS * BASE_TIME / ( ( cardSelected || 0 ) + 1 ) 
      React.useEffect( () => {
            getImages()
      }, []);
      return (
            <div className="game-wrapper">
                  {
                        cardSelected === undefined ?
                              Array.from({length: NUMBER_OF_LEVELS})
                                    .map((item, index) => { 
                                          const timeLimit = NUMBER_OF_LEVELS * BASE_TIME / ( index + 1 ) 
                                          return (
                                                <Card
                                                      key={index}
                                                      timeLimit={timeLimit}
                                                      flip={!!card}
                                                      level={index + 1}
                                                      imgUrl={card?.link}
                                                      count={count}
                                                      onStart={() => {
                                                            setCounter(starCountDown(timeLimit));
                                                            setCardSelected(index);
                                                            setCard(state.data && state.data[randomSelector(state.data.length)])
                                                      }}
                                                      onFinish={() => {}}
                                                />
                                          )
                                    }) : 
                                    <Card
                                          timeLimit={selectedTimeLimit}
                                          flip={!!card}
                                          level={cardSelected || 1}
                                          imgUrl={card?.link}
                                          count={count}
                                          onStart={() => {}}
                                          onFinish={() => {
                                                counterFunction?.stopCounter()
                                                setCardSelected(undefined);
                                                setCard(undefined) 
                                          }}
                                    />
                  }
            </div>
      )
}