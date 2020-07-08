import { ImgurData } from './../../types/imgur';
import { ProviderCreator } from './../contextInjector';
import { ManageContext } from './../../types/stateManagement';
import React from 'react'
import { imgurReducer } from './ImgurReducer';

export interface ImgurState {
      fetch: boolean;
      data?: ImgurData[];
}

export type ImgurAction = {
      type: string;
      data?: ImgurData[];
}

export type ImgurContext = ManageContext<ImgurState, ImgurAction>

export const INITIAL_STATE = {
      fetch: false,
}

export const imgurContext = React.createContext<ImgurContext>({
      state: INITIAL_STATE,
      dispatch: (action) => {}
})

export const ImgurProvider = ProviderCreator<ImgurState, ImgurAction>(INITIAL_STATE, imgurReducer, imgurContext)