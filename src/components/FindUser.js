import React, { useState } from "react";
import GitHubUsername from "./GitHubUsername";
const FindUser = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <div>
        <h1>Find User</h1>
        <form>
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="username.."
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
      </div>

      <div>
        {username ? (
          <GitHubUsername username={username} />
        ) : (
          <p> Please initiate </p>
        )}
      </div>
    </>
  );
};

export default FindUser;
