import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

import { getUsers, getUserPost, getStories } from "../../services/api";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) =>
    users.find((user) => postUserId === user.id);

  //Fetch all users
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  //Fetch posts user by user. When usersFetched +1, repeat it
  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }
    getUserPost(users[usersFetched].id).then((data) => {
      setPosts([...posts, ...data]);
      setUsersFetched(usersFetched + 1);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, usersFetched]);

  //Fetch stories
  useEffect(() => {
    getStories().then((data) => {
      setStories(data);
    });
  }, [users]);

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserPostById} />
      )}

      {users.length !== usersFetched ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;
