import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchSong.css'

function SearchSong(){
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    return(
        <div className='container'>
            <div className='input'>            
            <TextField placeholder="Search ID" onChange={(e) =>setInputValue(e.target.value)}/><br/>
            </div>
            <div className='submit'>
            <Button onClick={()=>navigate("/viewSong/"+inputValue)} variant='contained'>Search</Button>
            </div>
        </div>
    )
}

export default SearchSong;