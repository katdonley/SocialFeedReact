import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {
//I want each post to have 2 rows: 
//1st with be the person's name and 2nd will be the post content
  const[posts, setPosts] = useState([{name: 'Kat Donley', message: 'Hello World', date: '3-9-2022'}])

  return (
    <div>
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
