import React from "react";
import {
  Link,
  Route,
} from "react-router-dom";

import UserPosts from "./UserPosts";

const Users = ({
  users,
  posts,
  reactToPost,
}) => {
  return (
    <div className="page">
      <h1>Users</h1>

      <div className="users-list">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="user-card"
          >
            {user.name}
          </Link>
        ))}
      </div>

      <Route path="/users/:userId">
        <UserPosts
          posts={posts}
          users={users}
          reactToPost={reactToPost}
        />
      </Route>
    </div>
  );
};

export default Users;