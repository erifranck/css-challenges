import React from 'react';
import { useSetToken } from '../context/imgur/ImgurHooks';
import { useHistory } from 'react-router';

export const LoginCallback = () => {
      const setToken = useSetToken();
      const history = useHistory()
      const params = new URLSearchParams(window.location.href.split('#')[1])
      const accessToken = params.get('access_token');
      React.useEffect(() => {
            if(accessToken) {
                  setToken(accessToken);
                  history.push('/game')
            } else {
                  history.push('/')
            }
      }, [])
      return null 
}