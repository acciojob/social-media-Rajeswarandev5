import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom";

const EditPost = ({
  posts,
  users,
  updatePost,
}) => {
  const { postId } = useParams();

  const history = useHistory();

  const post = posts.find(
    (item) =>
      item.id === Number(postId)
  );

  const [title, setTitle] =
    useState(
      post ? post.title : ""
    );

  const [content, setContent] =
    useState(
      post ? post.content : ""
    );

  if (!post) {
    return (
      <div className="page">
        <h2>Post not found</h2>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    updatePost({
      ...post,
      title: title.trim(),
      content: content.trim(),
    });

    history.push("/");
  };

  return (
    <div className="page">
      <h1>Edit Post</h1>

      <form
        className="post-form"
        onSubmit={handleSubmit}
      >
        <label>
          Author
        </label>

        <select
          value={post.userId}
          disabled
          onChange={() => {}}
        >
          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>

        <label>
          Title
        </label>

        <input
          id="postTitle"
          value={title}
          onChange={(event) =>
            setTitle(
              event.target.value
            )
          }
        />

        <label>
          Content
        </label>

        <textarea
          id="postContent"
          value={content}
          onChange={(event) =>
            setContent(
              event.target.value
            )
          }
        />

        <button
          className="button"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPost;