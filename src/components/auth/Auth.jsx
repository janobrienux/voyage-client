import { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Auth = (props) => {
  console.log(props);
  function signUp() {
    alert("Login Successful");
  }

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("true");

  const handleSubmit = (event) => {
    // stops browser from refreshing when form is submitted
    event.preventDefault();
    // sets up value of the url depending on if logging in or signing up
    const url = login ? "http://localhost:3050/user/login" : "http://localhost:3050/user/register";
    // sets up value of the data we are going to send to the enpoint of the url nased on login value
    const bodyObj = login
      ? {
          email: email,
          password: password,
        }
      : {
          user: {
            userName: userName,
            email: email,
            password: password,
          },
        };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      //**** CHANGED TO TERNARY TO SET TOKEN!!!! */
      .then(signUp())
      .then((data) => (login ? props.updateToken(data.token) : undefined));
  };

  const title = () => {
    return login ? "Login" : "Signup";
    // if login is true, return string of 'Login'. Else, return 'Signup';
  };

  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login); // => set login to be the opposite of it's current value
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const signupFields = () => {
    return !login ? (
      <div className="loginForm">
        <label htmlFor="userName">Username</label>
        <br />
        <input type="text" id="userName" value={userName} onChange={(event) => setUserName(event.target.value)} />
      </div>
    ) : null;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-img">
          <img className="element" src={logo} alt="voyage-logo" />
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br />
        <input required
          type="text"
          id="email"
          // two-way data binding. This builds a closed circuit to display
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br />
        <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
