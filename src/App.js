import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [results, setResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    if (checkPass !== pass) {
      alert("Vos deux mots de passe ne sont pas identiques !");
    } else {
      setResults(true);
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
                value={pass}
                type="password"
                placeholder="password"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <FontAwesomeIcon icon="eye" />
              <span>Confirm your password</span>
              <input
                className={pass !== checkPass ? "red-border" : null}
                value={checkPass}
                type="password"
                placeholder="password"
                onChange={(event) => {
                  setCheckPass(event.target.value);
                }}
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
    </div>
  );
}

export default App;
