import logo from './logo.svg';
import './App.css';
import Post from './Post/post.js';
import posts from './data/postdb.json'
import { useState } from 'react';

function App() {
  return (
        posts.map((post)=>
        <Post {...post}/>
        )
  )

}

export default App;
