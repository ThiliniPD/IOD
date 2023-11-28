import LoginForm from "../exercises/LoginForm";
import { useNavigate, Outlet } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate();

    return(
        <div className="LoginPage">
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}