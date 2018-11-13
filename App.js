import React, {Component} from 'react';
import {AppNavigations} from "./src/navigation";
import { Provider } from 'react-redux';
import { store } from "./src/redux/app-redux";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store = { store } >
          <AppNavigations/>
        </Provider>
    );
  }
}


