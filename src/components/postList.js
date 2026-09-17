import React from "react";

import Post from "./Post";

const PostList = ({
  posts,
  users,
  reactToPost,
}) => {
  return (
    <div className="posts-list">
      {posts.map((post) => {
        const user = users.find(
          (item) => item.id === post.userId
        );

        return (
          <Post
            key={post.id}
            post={post}
            user={user}
            reactToPost={reactToPost}
          />
        );
      })}
    </div>
  );
};

export default PostList;