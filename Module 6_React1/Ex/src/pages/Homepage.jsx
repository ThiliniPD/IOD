import { Link } from "react-router-dom";
import { useNavigate, Outlet } from 'react-router-dom'

export default function Homepage() { 

    const navigate = useNavigate();

    return (
        <div className="Homepage">
            <h1>Home</h1>
        </div>
    )
}