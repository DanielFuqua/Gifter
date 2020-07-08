import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";


const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
        <AddPostForm />
      </Route>

      
      <Route path="/posts/:id" exact>
        <PostDetails />
      </Route>  

      <Route path="/posts/users/:id">
        <UserPosts />
      </Route> 
    </Switch>
  );
};

export default ApplicationViews;