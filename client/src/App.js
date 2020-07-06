import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Search />
        <AddPostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;