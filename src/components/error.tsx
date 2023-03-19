import { Link } from "react-router-dom";

function Error(){
    return (
        <div>
            <h1 style={{display: 'flex', justifyContent:'center'}}>
                An error occurred. Please retry.
            </h1>
            <br/>
            <br/>
            <Link to="/" style={{alignItems: 'center', justifyContent: 'center', display:'flex', fontSize: 'x-large'}}>Home</Link>
        </div>
    )
}

export default Error;