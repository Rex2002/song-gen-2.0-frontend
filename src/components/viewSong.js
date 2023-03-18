
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import download from 'downloadjs'
import { useParams } from 'react-router-dom'

function buf2hex (buffer){
  return [...new Uint8Array(buffer)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
  }

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
  
function base64ToHex(raw) {
  raw = atob(raw)
  let result = '';
  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += (hex.length === 2 ? hex : '0' + hex);
  }
  return result
}


function ViewSongs(){
    const api = process.env.REACT_APP_API_ADDRESS
    const { id } = useParams()
    const [ midi, setMidi ] = useState()
  
    const [midiData, setMidiData] = useState();
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
    }, [])

    const downloadMidi = ()=>{
      download(midi, "midiFile.mid")
    }

    return (
        <div>
            <Button onClick={downloadMidi}>Download Midi File</Button>
        </div>
    )
}

export default ViewSongs