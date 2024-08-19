import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../components/InputField";
import { CardBox } from "../components/CardBox";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);
  const [message, setMessage] = useState("");
  //const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/user/" + username,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const err = await response.json();
      console.log("Error data:", err.message);
      setMessage(err.message || "An error occurred");
      setAlertVisibility(true);
    } else {
      const data = await response.json();
      console.log("", data);
      // User exists
      if (data && password == data.password) {
        console.log("Logged IN");
        setUsername("");
        setPassword("");
        login(data);
        navigate("/home");
      }
      // User does not exist
      else {
        setMessage("Incorrect username or password.");
        setAlertVisibility(true);
      }
    }
  };

  return (
    <div className="d-flex align-items-center vh-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-7">
            <h4 className="mb-3 text-center ">Sign in to Todoloo~</h4>
            {alertVisible && (
              <Alert color="danger" onClose={() => setAlertVisibility(false)}>
                {message}
              </Alert>
            )}
            <CardBox>
              <form>
                <InputField
                  label="Username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" color="primary" onClick={handleLogin}>
                  Sign in
                </Button>
              </form>
            </CardBox>
            <CardBox>
              <p className="text-center">
                New to Todoloo~? <Link to="/register">Sign up.</Link>
              </p>
            </CardBox>
          </div>
        </div>
      </div>
    </div>
  );
};
