import { Link } from "react-router-dom";
import { useNavigate, Outlet } from 'react-router-dom'

export default function Homepage() { 

    const navigate = useNavigate();

    return (
        <div className="Homepage">
            <h1>Welcome to Home page</h1>
        </div>
    )
}