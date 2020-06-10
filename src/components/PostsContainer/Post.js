// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const [usersLikes, setUsersLikes] = useState(props.post.likes);
  //if white then add 1 to userLikes and turn heart to red
  //if red then subtract 1 to userLikes and turn heart to white
  const [heart, setHeart] = useState("white");

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        likes={usersLikes}
        setLikes={setUsersLikes}
        heartColor={heart}
        setHeartColor={setHeart}
      />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
