import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = ({
  users,
  createPost,
}) => {
  const history = useHistory();

  const [userId, setUserId] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userId || !content.trim()) {
      return;
    }

    createPost({
      title:
        title.trim() || "New Post",
      content: content.trim(),
      userId: Number(userId),
    });

    setUserId("");
    setTitle("");
    setContent("");

    history.push("/");
  };

  return (
    <div className="page">
      <h1>Create Post</h1>

      <form
        className="post-form"
        onSubmit={handleSubmit}
      >
        <label>
          Author
        </label>

        <select
          id="postAuthor"
          value={userId}
          onChange={(event) =>
            setUserId(
              event.target.value
            )
          }
        >
          <option value="">
            Select Author
          </option>

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
          placeholder="Post Title"
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
          placeholder="Write your post..."
        />

        <button
          className="button"
          type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;