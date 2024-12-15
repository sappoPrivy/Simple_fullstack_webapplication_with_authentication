import React, { useState } from "react";
// import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Alert } from "../components/Alert";

export const Profile: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [alertVisible, setAlertVisibility] = useState(false);
  const [message, setMessage] = useState("");

  interface UpdatedUserData {
    username?: string;
    password?: string;
    is_admin?: boolean;
  }
  const handleUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userId = user.user_id;
    const updatedUser: UpdatedUserData = {};

    if (password !== user.password) updatedUser.password = password;
    if (username !== user.username) updatedUser.username = username;

    const response = await fetch(
      "http://localhost:8080/api/v1/user/" + userId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      console.log("Error data:", err);
      setMessage(err.message || "An error occurred");
      setAlertVisibility(true);
    } else {
      console.log("Updated user");
      setUser((user) => ({
        ...user,
        username: updatedUser.username || user.username,
        password: updatedUser.password || user.password,
      }));
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar activeChild="Profile">
        {alertVisible && (
          <Alert color="danger" onClose={() => setAlertVisibility(false)}>
            {message}
          </Alert>
        )}
        <div className="form-group mt-2">
          <label className="mb-1">Username</label>
          <input
            type="text"
            id={username}
            value={username}
            className="form-control custom-field"
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="form-group mt-2">
          <label className="mb-1">Password</label>
          <input
            type="password"
            id={password}
            value={password}
            className="form-control custom-field"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary btn-block mt-3 custom-size fw-medium"
          onClick={handleUpdate}
        >
          Update
        </button>
      </Sidebar>
      <Footer />
    </>
  );
};
