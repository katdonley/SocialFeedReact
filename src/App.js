import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CustomButton from './Components/CustomButtons/CustomButtons';


function App() {
//I want each post to have 2 rows: 
//1st will be the person's name and 2nd will be the post content
  const[posts, setPosts] = useState([{name: 'Kat Donley', date: '3-9-2022', message: 'Hello World'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="border-box">
            <AddPostForm addNewPostProperty={addNewPost} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="border-box">
            <DisplayPosts parentPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
