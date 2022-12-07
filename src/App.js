import React from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import UpdatePost from "./components/UpdatePost";
import DeletePost from "./components/DeletePost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Posts />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <Header />
                <AddPost />
              </>
            }
          />
          <Route
            path="/update"
            element={
              <>
                <Header />
                <UpdatePost />
              </>
            }
          />
          <Route
            path="/delete"
            element={
              <>
                <Header />
                <DeletePost />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
