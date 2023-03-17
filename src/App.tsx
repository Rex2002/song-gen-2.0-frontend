import { Button, Slider } from '@mui/material';
import React, { useState } from 'react';
import './App.css';

function valueToBpmText(value: number){
  return '${number}BPM'
}

const BpmMarks = [
  {
    value: 60,
    label: '60 BPM',
  },
  {
    value: 180,
    label: '180 BPM',
  },
];
const GenreMarks = [
  {
    value: 0,
    label: 'Pop',
  },
  {
    value: 1,
    label: 'Random'
  },
  {
    value: 2,
    label: 'Blues',
  },
];


function App() {

  const [BPM, setBPM] = useState(60)
  const [genre, setGenre] = useState(0)

  const onBpmSliderChange = (e: Event, val: number | number[], activeThumb: number) =>{
    if(typeof val == "number"){
      setBPM(val)  
    }
  }
  const onGenreSliderChange = (e: Event, val: number | number[], activeThumb: number) =>{
    if(typeof val == "number"){
      setGenre(val)  
    }
  }
  const displayGenre = (genreNo : number) =>{
    return GenreMarks.filter(el => el.value === genreNo)[0].label
  }

  return (
    <div className="App">
      <header className="App-header">
          Song Generator v2
      </header>
      <body className='App-body'>
        <div className='App-body-container-left'>
          <div className='App-body-container-left-left'>          
            <Slider
              aria-label="Speed"
              orientation="vertical"
              getAriaValueText={valueToBpmText}
              valueLabelDisplay="off"
              defaultValue={120}
              max={180}
              min={60}
              marks={BpmMarks}
              onChange={onBpmSliderChange}
            />
          </div>
          <div className='App-body-container-left-right'>BPM <br/>{BPM}</div>
        </div>
        <div className='App-body-container-center'>
        <Button color='primary' variant='contained' style={{width: "40%"}}>
          <p className='App-generate-button-text'>
            Generate Song
          </p>
        </Button>
        </div>
        <div className='App-body-container-right'>
        <div className='App-body-container-left-right'> 
        Genre <br/>{displayGenre(genre)}
          </div>
          <div className='App-body-container-left-left'>
                     
          <Slider
              aria-label="Speed"
              orientation="vertical"
              getAriaValueText={valueToBpmText}
              valueLabelDisplay="off"
              defaultValue={0}
              step={1}
              max={2}
              min={0}
              marks={GenreMarks}
              onChange={onGenreSliderChange}
            /></div>
        </div>

      </body>
    </div>
  );
}

export default App;
