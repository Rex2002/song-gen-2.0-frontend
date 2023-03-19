import { Button, Slider, Switch } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadImg from '../res/uploadImg.png'
import './createSong.css';

function valueToBpmText(value: number){
  return value + 'BPM'
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
    label: 'POP',
  },
  {
    value: 1,
    label: 'BLUES'
  },
  {
    value: 2,
    label: 'RANDOM',
  },
];


function CreateSong() {

  const [BPM, setBPM] = useState(120)
  const [genre, setGenre] = useState(0)
  const [textIncluded, setTextIncluded] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File>()
  const navigate = useNavigate()
  //const api = process.env.REACT_APP_API_ADDRESS

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
  const onIncludeTextChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean)=>{
    setTextIncluded(checked)
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setUploadedFile(e.target.files[0])
    }
  }
  const displayGenre = (genreNo : number) =>{
    return GenreMarks.filter(el => el.value === genreNo)[0].label
  }
  const getFileType = (filename: string) =>{
    var splittedStuff = filename.split(".")
    return splittedStuff[splittedStuff.length-1]
  }

  const onGenerateSongClick = ()=>{
    const formData = new FormData()
    var formattedGenre = displayGenre(genre)
    formData.set("genre", formattedGenre === "RANDOM" ? displayGenre(Math.floor(Math.random() * 2)) : formattedGenre)
    formData.set("BPM", BPM as unknown as string)
    formData.set("fileType", getFileType(textIncluded && uploadedFile ? uploadedFile.name : ".txt"))
    formData.set("file", textIncluded && uploadedFile ? uploadedFile : "0")
    fetch("http://192.168.178.93:8080/api/generate", {
        method: "POST",
        body: formData})
    .then(data => data.text())
    .then(data => data !== null ? navigate("/viewSong/"+data) : navigate("/error"))
    .catch(err => {console.log(err); return navigate('/error')})
    }

  return (
    <div className="App">
      <body className='body'>
        <div className='body-container-left'>
          <div className='body-container-left-left'>          
            <Slider
              aria-label="Speed"
              orientation="vertical"
              getAriaValueText={valueToBpmText}
              valueLabelDisplay="off"
              defaultValue={BPM}
              track={false}
              max={180}
              min={60}
              marks={BpmMarks}
              onChange={onBpmSliderChange}
            />
          </div>
          <div className='body-container-left-right'>BPM <br/>{BPM}</div>
        </div>
        <div className='body-container-center'>
          <div className='body-container-center-top'>
            <Button color='primary' variant='contained' style={{width: "40%"}} onClick={onGenerateSongClick}>
              <p className='generate-button-text'>
                Generate Song
              </p>
            </Button>
        </div>
        <div className='body-container-center-bottom'>
          <div className='body-container-center-bottom-top'>
          Text?<br/>
          <Switch onChange={onIncludeTextChange} /><br/>
          </div>
          {textIncluded &&
            <div className="file-upload">
              <img width="50px" height="50px" src={uploadImg} alt="upload" />
              <div> {uploadedFile?.name || "Click box to upload"}</div>
              <input type="file" onChange={handleFileChange} />
            </div>}
        </div>
        </div>
        <div className='body-container-right'>
        <div className='body-container-left-right'> 
        Genre <br/>{displayGenre(genre)}
          </div>
          <div className='body-container-left-left'>
                     
          <Slider
              aria-label="Speed"
              orientation="vertical"
              getAriaValueText={valueToBpmText}
              valueLabelDisplay="off"
              defaultValue={genre}
              step={1}
              track={false}
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

export default CreateSong;
