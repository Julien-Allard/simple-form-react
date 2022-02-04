import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faEye, faEyeSlash);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [results, setResults] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    if (checkPass !== pass) {
      alert("Vos deux mots de passe ne sont pas identiques !");
    } else if (name === "" || email === "" || pass === "" || checkPass === "") {
      alert("Il reste des champs non renseignés !");
    } else {
      setResults(true);
    }
  };

  const togglePassword = () => {
    {
      !showPass ? setShowPass(true) : setShowPass(false);
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        {!results ? (
          <>
            <h1>Create account</h1>
            <form onSubmit={handleSubmit}>
              <span>Name</span>
              <input
                value={name}
                type="text"
                placeholder="Bob Martin"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <span>Email</span>
              <input
                value={email}
                type="text"
                placeholder="bob@mail.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <span>Password</span>
              <input
                className={pass !== checkPass ? "red-border" : null}
                type={showPass ? "texte" : "password"}
                placeholder="password"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <FontAwesomeIcon
                onClick={togglePassword}
                className="eye-icon1"
                icon={showPass ? "eye-slash" : "eye"}
              />
              <span>Confirm your password</span>
              <input
                className={pass !== checkPass ? "red-border" : null}
                type={showPass ? "texte" : "password"}
                placeholder="password"
                onChange={(event) => {
                  setCheckPass(event.target.value);
                }}
              />
              <FontAwesomeIcon
                onClick={togglePassword}
                className="eye-icon2"
                icon={showPass ? "eye-slash" : "eye"}
              />
              <input className="register-btn" value="Register" type="submit" />
            </form>
          </>
        ) : null}

        {results ? (
          <>
            <h1>Results</h1>
            <div className="results">
              <div className="user-info">
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Password : {pass}</p>
              </div>
              <button
                className="edit-btn"
                onClick={() => {
                  setResults(false);
                }}
              >
                Edit your informations
              </button>
            </div>
          </>
        ) : null}
      </div>
      <footer>
        <div>
          Made with{" "}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>{" "}
          by{" "}
          <a href="https://github.com/Julien-Allard" target="_blank">
            Julien Allard
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
