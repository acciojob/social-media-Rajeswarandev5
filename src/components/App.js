import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import "./../styles/App.css";

import Navigation from "./navigation";
import Home from "./home";
import Users from "./users";
import Notifications from "./notifications";
import CreatePost from "./createPost";
import EditPost from "./editPost";

const initialUsers = [
  {
    id: 1,
    name: "John",
    username: "john",
  },
  {
    id: 2,
    name: "Jane",
    username: "jane",
  },
  {
    id: 3,
    name: "Alice",
    username: "alice",
  },
];

const initialPosts = [
  {
    id: 1,
    title: "Learning React",
    content:
      "React is a JavaScript library for building user interfaces.",
    userId: 1,
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
  {
    id: 2,
    title: "React Router",
    content:
      "React Router makes navigation easy in React applications.",
    userId: 2,
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
  {
    id: 3,
    title: "JavaScript",
    content:
      "JavaScript is a powerful programming language.",
    userId: 3,
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
];

const App = () => {
  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);

  const createPost = (post) => {
    setPosts((previousPosts) => [
      ...previousPosts,
      {
        ...post,
        id: Date.now(),
        reactions: {
          thumbsUp: 0,
          heart: 0,
          wow: 0,
        },
      },
    ]);
  };

  const updatePost = (updatedPost) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === updatedPost.id
          ? updatedPost
          : post
      )
    );
  };

  const reactToPost = (postId, reaction) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        return {
          ...post,
          reactions: {
            ...post.reactions,
            [reaction]:
              post.reactions[reaction] + 1,
          },
        };
      })
    );
  };

  const refreshNotifications = () => {
    const timestamp = Date.now();

    setNotifications([
      {
        id: timestamp,
        message: "You have a new notification.",
      },
      {
        id: timestamp + 1,
        message: "A post was recently created.",
      },
      {
        id: timestamp + 2,
        message: "Someone reacted to a post.",
      },
    ]);
  };

  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home
              posts={posts}
              users={users}
              reactToPost={reactToPost}
            />
          </Route>

          <Route path="/users">
            <Users
              users={users}
              posts={posts}
              reactToPost={reactToPost}
            />
          </Route>

          <Route path="/notifications">
            <Notifications
              notifications={notifications}
              refreshNotifications={refreshNotifications}
            />
          </Route>

          <Route path="/create-post">
            <CreatePost
              users={users}
              createPost={createPost}
            />
          </Route>

          <Route path="/edit-post/:postId">
            <EditPost
              posts={posts}
              users={users}
              updatePost={updatePost}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;