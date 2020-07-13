import React from 'react';
import {ImgurProvider} from '../../context/imgur/ImgurContext'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from '../../pages/Login/Login';
import { LoginCallback } from '../../pages/LoginCallback';
import { ProtectedRoute } from '../../components/ProctectedRoute';
import { Game } from '../../pages/Game/Game';

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <BrowserRouter>
        <ProtectedRoute
          validator={(imgurState) => !!imgurState.token }
          redirectionPath="/game"
          path="/"
          exact
          component={Game}
        />
        <Route path="/login" exact component={LoginCallback} />
        <ProtectedRoute
          validator={(imgurState) => !imgurState.token }
          redirectionPath="/"
          path="/game"
          exact
          component={Game}
        />
      </BrowserRouter>
    </ImgurProvider>
  );
}

export default App;
