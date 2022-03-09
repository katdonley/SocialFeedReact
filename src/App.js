import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {
//I want each post to have 2 rows: 
//1st will be the person's name and 2nd will be the post content
  const[posts, setPosts] = useState([{name: 'Kat Donley', date: '3-9-2022', message: 'Hello World'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }

  return (
    <div>
      <AddPostForm addNewPostProperty={addNewPost} />
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
