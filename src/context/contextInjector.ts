import { Reducer, AnyAction, ManageContext } from './../types/stateManagement';
import React from 'react'

export const ProviderCreator = <State, Action extends AnyAction>(
      defaultState: State,
      reducer: Reducer<State, Action>,
      context: React.Context<ManageContext<State, Action>>
) => class ProviderComponent extends React.Component<{children: React.ReactNode}, State> {
      static state: State;
      state = defaultState
      dispatch = (action: Action) => {
           this.setState(
                 (prevState) => {
                        return reducer(prevState, action)
                 }
           ) 
      }
      render() {
            const { Provider } = context
            return  React.createElement(Provider, {
                  children: this.props.children,
                  value: {
                        state: this.state,
                        dispatch: this.dispatch
                  }
            })
            
      }
}