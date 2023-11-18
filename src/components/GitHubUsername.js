import React, { useEffect, useState } from "react";
const GitHubUsername = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      setUser(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(user);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [username]);
  return (
    <>
      <div>
        {loading && <p>Loading</p>}
        <ul>
          <li>{user ? <img src={user.avatar_url} /> : "NA"}</li>
          <li>
            <p>
              <strong>Name:</strong> {user ? user.name : "NA"}
            </p>
          </li>
          <li>
            <p>
              <strong>Location: </strong> {user ? user.location : "NA"}
            </p>
          </li>
          <li>
            <p>
              <strong>Followers: </strong> {user ? user.followers : "NA"}{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>Public respo: </strong> {user ? user.public_repos : "NA"}
            </p>
          </li>
          <li>
            <p>
              <strong>Bio: </strong> {user ? user.bio : "NA"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GitHubUsername;
