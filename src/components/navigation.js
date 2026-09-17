import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>

      <Link to="/users">Users</Link>

      <Link to="/notifications">
        Notifications
      </Link>

      <Link to="/create-post">
        Create Post
      </Link>
    </nav>
  );
};

export default Navigation;