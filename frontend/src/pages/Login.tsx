import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../components/InputField";
import { CardBox } from "../components/CardBox";
import { Button } from "../components/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/user/${username}",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error data:", errorData);
      return;
    }
    const data = await response.json();
    console.log("Error data:", data);
    if (data) {
      if (password == data.password) {
        setLoggedIn(true);
        console.log("Logged IN");
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-8">
            <CardBox heading="Sign in to Todoloo~">
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
