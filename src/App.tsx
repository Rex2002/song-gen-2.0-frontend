import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateSong from './components/createSong';
import Header from './components/header';
import Error from './components/error'
import ViewSongs from './components/viewSong';
import SearchSong from './components/searchSong';


function App() {

 return (
  
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="viewSong">
          <Route path=":id" element={<ViewSongs/>}/>
          <Route path="" element={<SearchSong/>}/>
        </Route>
        <Route index element={<CreateSong/>}/>
        <Route path="error" element={<Error />}/>
      </Route>
    </Routes>
  );
}

export default App;
