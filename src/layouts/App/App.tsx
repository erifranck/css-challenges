import React from 'react';
import {ImgurProvider} from '../../context/imgur/ImgurContext'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../../pages/Login/Login';
import { LoginCallback } from '../../pages/LoginCallback';
import { ProtectedRoute } from '../../components/ProctectedRoute';
import { Game } from '../../pages/Game/Game';
import { AppLayout } from '../AppLayout/AppLayout';
import { MenuSelector } from '../../pages/MenuSelector/MenuSelector';
import { List } from '../../pages/List/List';
import { Score } from '../../pages/Score/Score';

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            validator={(imgurState) => !!imgurState.token }
            layout={(props) => <>{props.children}</>}
            redirectionPath="/login"
            path="/"
            exact
            component={Login}
          />
        </Switch>
        <Route path="/login" exact component={LoginCallback} />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          layout={AppLayout}
          redirectionPath="/"
          path="/game"
          exact
          component={Game}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          layout={AppLayout}
          redirectionPath="/"
          path="/list"
          exact
          component={List}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          layout={(props) => <>{props.children}</>}
          redirectionPath="/login"
          path="/menu"
          exact
          component={MenuSelector}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          layout={(props) => <>{props.children}</>}
          redirectionPath="/login"
          path="/score"
          exact
          component={Score}
        />
      </BrowserRouter>
    </ImgurProvider>
  );
}

export default App;
