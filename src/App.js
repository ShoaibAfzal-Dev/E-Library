import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from './Components/NotFoundPage';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signin from './Components/Signin';
import MainPage from './Components/MainPage';
import SingleBook from './Components/SingleBook';
import GroupData from './Components/GroupData';
import Protected from './Components/Protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path='/main-page' element={<MainPage/>}/>
          <Route path='/main-page/:id' element={<Protected
          Component={SingleBook}
          />}/>
          <Route path='/main-page/group/:group' element={<Protected Component={GroupData} />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
