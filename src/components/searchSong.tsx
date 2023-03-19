import { Button, TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchSong.css'

function SearchSong(){
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const onKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode === 13){
            navigate("/viewSong/"+inputValue)
        }
    }

    return(
        <div className='container'>
            <div className='input'>            
            <TextField placeholder="Search ID" onChange={(e) =>setInputValue(e.target.value)} onKeyDown={onKeyDown}/><br/>
            </div>
            <div className='submit'>
            <Button onClick={()=>navigate("/viewSong/"+inputValue)} variant='contained'>Search a cool song</Button>
            </div>
        </div>
    )
}

export default SearchSong;