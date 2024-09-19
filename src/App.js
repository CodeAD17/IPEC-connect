import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import { Profiler } from 'react';
import Profile from './components/profile';
import Messages from './components/messages';
import Match from './components/match';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div>
        <Routes>
            
            <Route path='/' element={<Main/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/matches' element={<Match/>}/>
              
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
