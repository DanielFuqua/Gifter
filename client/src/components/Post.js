import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//using the Card component that comes with reactstrap to organize some of the post details
const Post = ({ post }) => {
  
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: 
        <Link to={`/posts/users/${post.userProfile.id}`}>
          {post.userProfile.name}
        </Link>
      </p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
        </Link>
        <p>{post.caption}</p>
      </CardBody>
    </Card>
  );
};

export default Post;