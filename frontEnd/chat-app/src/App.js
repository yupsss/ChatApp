import './App.css';
import {BrowserRouter,  Route, Routes} from "react-router-dom";
// import Register from './components/Register';
import Login from './components/Login';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/' element={<Register/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
