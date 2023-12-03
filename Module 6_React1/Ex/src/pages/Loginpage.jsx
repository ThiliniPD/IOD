import LoginForm from "../exercises/LoginForm";
import { useNavigate, Outlet } from 'react-router-dom'
import MUIFormEx from "../exercises/MUIFormEx";

export default function LoginPage() {
    const navigate = useNavigate();

    return(
        <div className="LoginPage">
            <MUIFormEx/>
        </div>
    )
}