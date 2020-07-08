import React from 'react';
import {imgurContext, ImgurContext, ImgurState} from './ImgurContext';
import { getImages } from './ImgurServices';
import { getImagesRequest, getImagesSuccess } from './ImgurActions';

export const useImgur = () : [ImgurState, () => void] => {
      const {state, dispatch} = React.useContext<ImgurContext>(imgurContext)
      return [
            state,
            () => {
                  dispatch(getImagesRequest())
                  getImages().then(response => {
                        dispatch(getImagesSuccess(response.data))
                  })
            }
      ]
}