import React from 'react';
import {ImgurProvider} from '../../context/imgur/ImgurContext'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Login } from '../../pages/Login/Login';
import { LoginCallback } from '../../pages/LoginCallback';
import { ProtectedRoute } from '../../components/ProctectedRoute';
import { Game } from '../../pages/Game/Game';
import { AppLayout } from '../../components/AppLayout/AppLayout';
import { ChallengeList } from '../../pages/List/List';
import { MenuSelector } from '../../pages/MenuSelector/MenuSelector';
import { Score } from '../../pages/Score/Score';
import './App.css';

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <BrowserRouter>
        <Route path="/login" exact component={LoginCallback} />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          redirectionPath="/login"
          layout={AppLayout}
          path="/game"
          component={Game}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          redirectionPath="/login"
          layout={AppLayout}
          path="/list"
          component={ChallengeList}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          redirectionPath="/login"
          layout={(props) => <>{props.children}</>}
          path="/menu"
          component={MenuSelector}
        />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          redirectionPath="/score"
          layout={(props) => <>{props.children}</>}
          path="/score"
          component={Score}
        />
        <Switch>
          <ProtectedRoute
            validator={(imgurState) => !!imgurState.token }
            redirectionPath="/game"
            path="/"
            exact
            layout={AppLayout}
            component={Login}
          />
        </Switch>
      </BrowserRouter>
    </ImgurProvider>
  );
}

export default App;
