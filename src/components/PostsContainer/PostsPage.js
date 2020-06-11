//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [userPosts, setUserPosts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {userPosts.map((userObject) => {
        console.log(userObject);
        return <Post key={userObject.id} post={userObject}/>;
      })}
    </div>
  );
};

export default PostsPage;
