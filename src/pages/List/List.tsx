import React from 'react';
import { useImgur } from '../../context/imgur/ImgurHooks';
import { NUMBER_OF_LEVELS, BASE_TIME } from '../Game/Game';
import { MiniCard } from '../../components/MiniCard/MiniCard';
import './List.scss'

export const ChallengeList = () => {
      const [state, getImages] = useImgur();
      React.useEffect( () => {
            getImages()
      }, []);
      return  (
            <div className="challenge-card-wrapper">
                  {

                        Array.from({length: NUMBER_OF_LEVELS })
                              .map((item, index) => { 
                                    const timeLimit = NUMBER_OF_LEVELS * BASE_TIME / ( index + 1 ) 
                                    return (
                                          <div key={index} className="challenge-card-list">
                                                {
                                                      state.data?.map((item, key) => (
                                                            <MiniCard key={key} image={item.link} />
                                                      ))
                                                }
                                          </div>
                                    )
                              })
                  }
            </div> 
      )
}