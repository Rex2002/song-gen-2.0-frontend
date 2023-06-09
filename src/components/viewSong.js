import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import download from 'downloadjs'
import { useParams } from 'react-router-dom'
import './viewSong.css'

function ViewSongs(){
    const api = process.env.REACT_APP_API_ADDRESS
    const { id } = useParams()
    const [ midi, setMidi ] = useState()
    const [status, setStatus] = useState("Loading")
      useEffect(() => {
        console.log("ID: " + id);
        fetch(api + "/api/file/" + id)
        .then(data => data.blob())
        .then(data => {
          if(data.size !== 0){
            setMidi(data)
            setStatus("Success")
          }
          else{
            setStatus("Failed")
          }
        })
        .catch(err =>{
          setStatus("Failed")
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
          <div className="info-area">
            <h1>
              {status === "Loading" && <>Loading...</>}
              {status === "Failed" && <>Song does not exists</>}
              {status === "Success"&& <>SongId: {id}</>}
            </h1>
          </div>
          
          <Button variant='contained' className="download-button" disabled={status !== "Success"} onClick={downloadMidi}>Download Midi File</Button>
          
        
        </div>
    )
}

export default ViewSongs