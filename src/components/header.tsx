import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./header.css"
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Header(){
  const navigate = useNavigate()
    return (
        <div>
        <header className="App-header">
        <IconButton sx={{borderRadius: '5px'}} className="homeIcon-button" onClick={()=> navigate("/")}>
            <HomeIcon color="secondary" sx={{fontSize: 50}}  className='homeIcon-icon'/>
          </IconButton>
          <div className='header-text'>
            Song Generator v2
          </div>
          <IconButton sx={{borderRadius: '5px'}} className="searchIcon-button" onClick={()=> navigate("/viewSong")}>
            <SearchIcon color="secondary" sx={{fontSize: 50}}  className='searchIcon-icon'/>
          </IconButton>

        </header>  
        </div>
    )
}

export default Header;