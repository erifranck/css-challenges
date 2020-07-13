import { ImgurData } from './../../types/imgur';
import { ProviderCreator } from './../contextInjector';
import { ManageContext } from './../../types/stateManagement';
import React from 'react'
import { imgurReducer, imgurPersistor } from './ImgurReducer';

export interface ImgurState {
      fetch: boolean;
      data?: ImgurData[];
      token?: string;
}

export type ImgurAction = {
      type: string;
      data?: ImgurData[];
      token?: string;
}

export type ImgurContext = ManageContext<ImgurState, ImgurAction>

export const INITIAL_STATE = imgurPersistor.get() || {
      fetch: false,
}

export const imgurContext = React.createContext<ImgurContext>({
      state: INITIAL_STATE,
      dispatch: (action) => {}
})

export const ImgurProvider = ProviderCreator<ImgurState, ImgurAction>(INITIAL_STATE, imgurReducer, imgurContext)