import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateSong from './components/createSong';
import Header from './components/header';
import Error from './components/error'
import ViewSongs from './components/viewSong';
import SearchSong from './components/searchSong';
import Footer from './components/footer';


function App() {

 return (
    <>
    <Header/>
    <Routes>
      <Route path="/">
        <Route path="viewSong">
          <Route path=":id" element={<ViewSongs/>}/>
          <Route path="" element={<SearchSong/>}/>
        </Route>
        <Route index element={<CreateSong/>}/>
        <Route path="error" element={<Error />}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
