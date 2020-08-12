import React from 'react';
import { useImgur, useSetScore } from '../../context/imgur/ImgurHooks';
import { ImgurData } from '../../types/imgur';
import { Card } from '../../components/Card/Card';
import { useCounter, CounterFunction } from '../../utils/countDown';
import { randomSelector } from '../../utils/randomSelector';
import './Game.scss';
import { NUMBER_OF_LEVELS, BASE_TIME, BASE_SCORE } from '../../utils/constants';

interface LevelSelected {
      time: number;
      level: number
}
export const Game = () => {
      const [state, getImages] = useImgur();
      const [card, setCard] = React.useState<ImgurData>();
      const [counter, setCounter] = React.useState<CounterFunction>();
      const [levelSelected, setLevel] = React.useState<LevelSelected>();
      const [count, starCountDown] = useCounter();
      const setScore = useSetScore();
      React.useEffect( () => {
            getImages()
      }, []);
      return (
            <div className="game-wrapper">
                  {!(card && levelSelected) ? 
                        Array.from({length: NUMBER_OF_LEVELS}).map((intem, index) => {
                              const timeLimit = NUMBER_OF_LEVELS * BASE_TIME / (index + 1)
                              return  (
                                    <Card
                                          flip={!!card}
                                          imgUrl={card?.link}
                                          count={count}
                                          time={timeLimit}
                                          level={index + 1}
                                          onStart={() => {
                                                setLevel({time: timeLimit, level: index + 1})
                                                setCounter(starCountDown(timeLimit));
                                                setCard(state.data && state.data[randomSelector(state.data.length)])     
                                          }}
                                          onFinish={() => {}}
                                    />
                              )
                        }): (
                              <Card
                                    flip={!!card}
                                    imgUrl={card?.link}
                                    count={count}
                                    time={levelSelected?.time}
                                    level={levelSelected?.level}
                                    onStart={() => {}}
                                    onFinish={() => {
                                          setScore(levelSelected.level * BASE_SCORE)
                                          counter?.stopCounter()
                                          setCard(undefined) 
                                    }}
                              />
                        )
            }
            </div>
      )
}