import React from "react";
import { useParams } from "react-router-dom";

import PostList from "./PostList";

const UserPosts = ({
  posts,
  users,
  reactToPost,
}) => {
  const { userId } = useParams();

  const selectedUserId = Number(userId);

  const userPosts = posts.filter(
    (post) =>
      post.userId === selectedUserId
  );

  const user = users.find(
    (item) => item.id === selectedUserId
  );

  return (
    <div className="user-posts">
      <h2>
        {user ? user.name : "User"}'s Posts
      </h2>

      <PostList
        posts={userPosts}
        users={users}
        reactToPost={reactToPost}
      />
    </div>
  );
};

export default UserPosts;