import { ImgurData } from './../../types/imgur';
import { getImagesResponse } from './../../mockups/imgurResponse';

export function getImages() {
      return new Promise<{ data: ImgurData[] }>((resolve) => {
            setTimeout(() => {
                  resolve(getImagesResponse)
            }, 1000)
      })
}