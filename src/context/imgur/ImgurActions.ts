import { ImgurData } from './../../types/imgur';

export const GET_IMAGES_SUCCESS = 'imgur/GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAIL = 'imgur/GET_IMAGES_FAIL';
export const GET_IMAGES = 'imgur/GET_IMAGES';

export const getImagesRequest = () => {
      return {
            type: GET_IMAGES
      }
}
export const getImagesSuccess = (data: ImgurData[]) => {
      return {
            type: GET_IMAGES_SUCCESS,
            data
      }
}