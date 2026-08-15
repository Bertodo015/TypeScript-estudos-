import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    const heandleLogout = () => {
        navigate('/login');
    }
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <h1>Meu App</h1>
                    </div>

                    <nav className="header-nav">
                        <button onClick={() => navigate('/home')} className="nav-link">
                            Home
                        </button>

                        <button onClick={() => navigate('/about')} className="nav-link">
                            Sobre
                        </button>
                    </nav>

                    <div className="header-user">
                        <span>Usuário: João</span>
                        <button onClick={heandleLogout} className="logout-btn">
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;