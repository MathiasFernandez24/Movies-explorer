import TabNavigator from './src/navigation/tab/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
