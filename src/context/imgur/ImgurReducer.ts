import { INITIAL_STATE, ImgurState, ImgurAction } from './ImgurContext';
import { GET_IMAGES, GET_IMAGES_SUCCESS, SET_TOKEN, LOGOUT } from './ImgurActions';
import { Persistor } from '../../utils/persistor';

export const imgurPersistor = Persistor<ImgurState>('imgur');
export function imgurReducer(state = INITIAL_STATE, action: ImgurAction) : ImgurState {
      return imgurPersistor.set((() => {
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
                  case SET_TOKEN:
                        return {
                              ...state,
                              token: action.token
                        };
                  case LOGOUT:
                        return {
                              fetch: false
                        }
                  default: 
                        return state;
            }
      })())
}