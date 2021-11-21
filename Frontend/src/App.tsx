import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import { Routes, Route } from 'react-router-dom';
import { IUser } from './interface/user';

function App() : React.ReactElement {
  
  const [ user, setLoginUser] = useState<IUser | undefined>()
  return (
    <div className="App">
      <Routes>
          <Route path="/" element=  {
              user && user?._id? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          <Route path="/register" element={ <Register />}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
