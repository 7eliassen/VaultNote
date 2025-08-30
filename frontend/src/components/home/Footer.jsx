import { useContext } from "react";
import userContext from "../../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const exit = () => {
        localStorage.removeItem("token")
        navigate("/login")
        
    }

    const username = useContext(userContext);
    return (
        <footer className="footer">
            <p>Logged as {username}
            </p>

            <button className="exit-button" onClick={exit}>Exit</button>

        </footer>
    );
}

export default Footer