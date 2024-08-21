import React, { useState } from "react";
// import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Profile: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState(user.username);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState(user.password);

  const handleUpdate = () => {};

  return (
    <>
      <Navbar />
      <Sidebar activeChild="Profile">
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
