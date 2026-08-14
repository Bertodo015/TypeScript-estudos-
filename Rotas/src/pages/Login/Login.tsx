import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: any) => {
    event.preventDefault();

    if (email && password) {
      navigate("/home");
      console.log('Login realizado');
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-input-group">
              <label htmlFor="email" className="login-label">
                E-mail
              </label>
              <input 
                type="text" 
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite seu e-mail"
                className="login-input"
              />
            </div>

            <div className="login-input-group">
              <label htmlFor="password" className="login-label">
                Senha
              </label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite sua senha"
                className="login-input"
              />
            </div>

            <button type="submit" className="login-button">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;