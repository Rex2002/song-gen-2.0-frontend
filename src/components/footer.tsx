import { Outlet, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./footer.css"
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Footer(){
  const navigate = useNavigate()
    return (
        <div>
        <header className="App-footer">
            <div className="footer-credits">
                Developer Contact: <a href="mailto:info.songgenerator@gmail.com">SongGenerator Team</a>
            </div>
          <div className='footer-text'>
            Source code available at Github: <a href="https://github.com/Rex2002/song-gen-2.0-frontend">(1)</a> <a href="https://github.com/MalteRichert/Song-Gen-2.0-Backend">(2)</a>
          </div>
        <div className="icon-source">
            Icons from MUI and <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
        </div>
        </header>  
        </div>
    )
}

export default Footer;