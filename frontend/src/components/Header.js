import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ position: "absolute", top: 10, right: 20 }}>
      {user ? `Hello, ${user.displayName || user.givenName || user.name}. Build your awesome portfolio` : ""}
    </div>
  );
};

export default Header;