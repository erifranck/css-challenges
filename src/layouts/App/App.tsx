import React from 'react';
import {ImgurProvider} from '../../context/imgur/ImgurContext'
import './App.css';
import { CardContainer } from '../../components/CardContainer/CardContainer';

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <>
        <CardContainer></CardContainer>
        {props.children}
      </>
    </ImgurProvider>
  );
}

export default App;
