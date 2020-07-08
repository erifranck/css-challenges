import React from 'react'
import { useImgur } from '../../context/imgur/ImgurHooks'

export const CardContainer = () => {
      const [state, getImages] = useImgur();
      React.useEffect( () => {
            getImages()
      }, []);
      return (
            <div>
                  <ul>
                        {
                              state.data && state.data.map(item => (
                                    <li>
                                          {item.title}
                                    </li>
                              ))
                        }
                  </ul>
                  {state.fetch && <div>loading...</div> }
            </div>
      )
}