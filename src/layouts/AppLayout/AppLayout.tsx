import React from 'react';
import { Header } from '../../components/Header/Header';

export const AppLayout: React.FC = (props) => (
      <>
            <Header />
            {props.children}
      </>
)