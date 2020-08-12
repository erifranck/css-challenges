import React from 'react';
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useImgur } from '../context/imgur/ImgurHooks';
import { ImgurState } from '../context/imgur/ImgurContext';

interface Props extends RouteProps {
      validator: (imgurState: ImgurState) => boolean;
      layout: React.ComponentType<any>,
      component: React.ComponentType<any>,
      redirectionPath: string;
}
export const ProtectedRoute: React.FC<Props> = ({ layout: Layout, component: Component,...props }) => {
      const [state] = useImgur();
      if (props.validator(state)) {
            return (
                  <Redirect to={props.redirectionPath} />
            )
      }
      return (
            <Route {...props} render={(componentProps) => (
                  <Layout>
                        <Component {...componentProps}/>
                  </Layout>
            )}/>
      )
}