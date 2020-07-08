import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <Header />
          <Search />
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;