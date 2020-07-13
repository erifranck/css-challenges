import React from 'react';
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useImgur } from '../context/imgur/ImgurHooks';
import { ImgurState } from '../context/imgur/ImgurContext';

interface Props extends RouteProps {
      validator: (imgurState: ImgurState) => boolean;
      redirectionPath: string;
}
export const ProtectedRoute: React.FC<Props> = (props) => {
      const [state] = useImgur();
      if (props.validator(state)) {
            return (
                  <Redirect to={props.redirectionPath} />
            )
      }
      return (
            <Route {...props}/>
      )
}