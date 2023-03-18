import { Outlet } from "react-router-dom";
import "./header.css"

function Header(){
    return (
        <div>
        <header className="App-header">
          Song Generator v2
        </header>
        <Outlet/>
        </div>
    )
}

export default Header;