import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const AuthCheck = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5001/protected", {
      method: "GET",
      credentials: "include",
    })
      .then(async res => {
        if (res.status === 200) {
          setAuthenticated(true);
          const data = await res.json();
          if (data && data.user) {
            setUser(data.user);
          }
        } else {
          window.location.href = "http://localhost:5001/protected";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5001/protected";
      })
      .finally(() => setLoading(false));
  }, [setUser]);

  if (loading) return <div>Checking authentication...</div>;
  if (!authenticated) return null;

  return <>{children}</>;
};

export default AuthCheck;