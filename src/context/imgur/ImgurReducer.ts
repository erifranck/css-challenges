import { INITIAL_STATE, ImgurState, ImgurAction } from './ImgurContext';
import { GET_IMAGES, GET_IMAGES_SUCCESS } from './ImgurActions';

export function imgurReducer(state = INITIAL_STATE, action: ImgurAction) : ImgurState {
      switch(action.type) {
            case GET_IMAGES:
                  return {
                        ...state,
                        fetch: true
                  };
            case GET_IMAGES_SUCCESS:
                  return {
                        ...state,
                        fetch: false,
                        data: action.data
                  };
            default: 
                  return state;
      }
}