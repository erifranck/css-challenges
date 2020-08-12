import React from 'react';
import { useImgur } from '../../context/imgur/ImgurHooks';
import { MiniCard } from '../../components/MiniCard/MiniCard';
import { NUMBER_OF_LEVELS } from '../../utils/constants';
import './List.scss'
import { useHistory } from 'react-router';

export const List = () => {
      const [state, getImages] = useImgur();
      React.useEffect( () => {
            getImages()
      }, []);
      const history = useHistory()
      return (
            <div className="challenge-list-wrapper">
                  {
                        Array.from({length: NUMBER_OF_LEVELS}).map((element, index) => (
                              <div onClick={() => history.push('/game')} className="challenge-list-content" key={index}>
                                    {state.data?.map(item => (
                                          <MiniCard key={item.id} image={item.link} />
                                    ))}
                              </div>
                        ))
                  }
            </div>
      )
}