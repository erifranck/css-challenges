import { imgurPath } from './../../constants/imgurConstants';
import { ImgurData } from './../../types/imgur';
import { getImagesResponse } from './../../mockups/imgurResponse';

export async function getImages(token: string): Promise<ImgurData[]> {
      const response = await fetch(`${imgurPath}/3/account/me/images`, {
            headers: {
                  'Authorization': `Bearer ${token}`
            }
      })
      const data = await response.json();
      return data.data
}