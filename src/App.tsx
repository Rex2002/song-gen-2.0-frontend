import { Button, Checkbox, Slider } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import CreateSong from './components/createSong';
import Header from './components/header';

function TestID (){
  let { id } = useParams()
  console.log("testID called")
  return (
    <div> ID: {id}</div>
  )
}

function App() {

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="viewSong">
          <Route path=":id" element={<TestID/>}/>
        </Route>
        <Route index element={<CreateSong/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
