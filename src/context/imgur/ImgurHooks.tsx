import React from 'react';
import {imgurContext, ImgurContext, ImgurState} from './ImgurContext';
import { getImages } from './ImgurServices';
import { getImagesRequest, getImagesSuccess, setToken } from './ImgurActions';

export const useImgur = () : [ImgurState, () => void] => {
      const {state, dispatch} = React.useContext<ImgurContext>(imgurContext)
      return [
            state,
            () => {
                  if(state.token) {
                        dispatch(getImagesRequest())
                        getImages(state.token).then(response => {
                              dispatch(getImagesSuccess(response))
                        })
                  }
            }
      ]
}

export const useSetToken = () : (token: string) => void => {
      const {dispatch} = React.useContext<ImgurContext>(imgurContext)
      return (token) => dispatch(setToken(token))
}