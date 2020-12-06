import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation/MainNavigation';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/reducers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
