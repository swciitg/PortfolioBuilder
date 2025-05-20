import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthRedirectHandler = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // Get the code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange code for session
      fetch("http://localhost:5001/auth/microsoft/getToken", {
        method: "GET",
        headers: { "Code": code },
        credentials: "include",
      })
        .then(res => res.json())
        .then(data => {
          if (data.studInformation) {
            setUser(data.studInformation);
          }
          navigate("/"); // Redirect to home 
        })
        .catch(() => {
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [navigate, setUser]);

  return <div>Signing you in...</div>;
};

export default AuthRedirectHandler;