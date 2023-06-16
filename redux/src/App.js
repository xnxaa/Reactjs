import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page/HomePage';
import { LoginPage } from './pages/login-page/LoginPage';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { postReducer } from './store/reducers';


const store = createStore(postReducer);


function App() {
  return (
    <div className="App">
<Provider store={store}>
    <Routes>
    <Route path='/home'  element={<HomePage/>}/>
    <Route path='/login'  element={<LoginPage/>}/>
    <Route path='/'  element={<LoginPage/>}/>
    </Routes>
    </Provider>
    </div>
  );
}

export default App;
