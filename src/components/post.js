import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({
  post,
  user,
  reactToPost,
}) => {
  const history = useHistory();

  return (
    <article className="post">
      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <p className="author">
        Author: {user ? user.name : "Unknown"}
      </p>

      <div className="reactions">
        <button
          onClick={() =>
            reactToPost(
              post.id,
              "thumbsUp"
            )
          }
        >
          👍 {post.reactions.thumbsUp}
        </button>

        <button
          onClick={() =>
            reactToPost(
              post.id,
              "heart"
            )
          }
        >
          ❤️ {post.reactions.heart}
        </button>

        <button
          onClick={() =>
            reactToPost(
              post.id,
              "wow"
            )
          }
        >
          😮 {post.reactions.wow}
        </button>
      </div>

      <button
        className="button"
        onClick={() =>
          history.push(
            `/edit-post/${post.id}`
          )
        }
      >
        Edit
      </button>
    </article>
  );
};

export default Post;