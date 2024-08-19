import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../components/InputField";
import { CardBox } from "../components/CardBox";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);
  const [message, setMessage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("The password does not match");
      setAlertVisibility(true);
      return;
    }

    const user = { username, password };
    console.log(user);

    const response = await fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const err = await response.json();
      console.log("Error data:", err);
      setMessage(err.message || "An error occurred");
      setAlertVisibility(true);
    } else {
      console.log("New user added");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-7">
            <h4 className="mb-3 text-center ">Sign up to Todoloo~</h4>
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
                <InputField
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" color="primary" onClick={handleRegister}>
                  Sign up
                </Button>
              </form>
              <p className="text-center">
                Already have an account? <Link to="/">Sign in.</Link>
              </p>
            </CardBox>
          </div>
        </div>
      </div>
    </div>
  );
};
