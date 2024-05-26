import './App.css';
import { Provider } from 'react-redux';
import store from './components/store';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToggleTheme />
      </Provider>
    </div>
  );
}

export default App;
