import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import {Provider} from "react-redux"
import store from "./store"
import Cart from './components/cart';
import {Route, Routes,BrowserRouter,Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
           <Navbar className="row"/>
              <Routes>
                 <Route exact path='/' element= {<Home/>}/>
                 <Route path='/cart' element= {<Cart/>}/>
              </Routes>
            </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
