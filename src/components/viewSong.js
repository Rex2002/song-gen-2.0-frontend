import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import download from 'downloadjs'
import { useParams } from 'react-router-dom'
import './viewSong.css'

function ViewSongs(){
    const api = process.env.REACT_APP_API_ADDRESS
    const { id } = useParams()
    const [ midi, setMidi ] = useState()
      useEffect(() => {
      // fetch data from id 
      console.log("api: " + api)
        console.log("ID: " + id);
        fetch(api + "/api/file/" + id)
        .then(data => data.blob())
        .then(data => {
          setMidi(data)
        })
      return () => {
      }
      // eslint-disable-next-line
    }, [])

    const downloadMidi = ()=>{
      download(midi, id+".mid")
    }

    return (
        <div className="container">
          <div>
          <h1>
            SongId: {id}
          </h1>
          </div>
          
            <Button variant='contained' onClick={downloadMidi}>Download Midi File</Button>
          
        
        </div>
    )
}

export default ViewSongs