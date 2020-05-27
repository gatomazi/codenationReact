import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

import { getUsers, getUserPost } from "../../services/api";

const ProfileRoute = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];

    getUsers(param).then((profileData) => {
      setUser(profileData[0]);
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      getUserPost(user.id).then((posts) => {
        setUserPosts(posts);
        setIsLoading(false);
      });
    }
  }, [user.id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={user.name}
        avatar={user.avatar}
        username={user.username}
      />

      {isLoading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;
