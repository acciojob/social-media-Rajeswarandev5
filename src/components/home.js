import React from "react";
import { Link } from "react-router-dom";

import PostList from "./PostList";

const Home = ({
  posts,
  users,
  reactToPost,
}) => {
  return (
    <div className="page">
      <h1>Social Media App</h1>

      <div className="tabs">
        <Link to="/">
          All Posts
        </Link>

        <Link to="/users">
          Users
        </Link>

        <Link to="/notifications">
          Notifications
        </Link>

        <Link to="/create-post">
          Create Post
        </Link>
      </div>

      <PostList
        posts={posts}
        users={users}
        reactToPost={reactToPost}
      />
    </div>
  );
};

export default Home;