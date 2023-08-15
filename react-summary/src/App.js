import './App.css';
import React from 'react';
import Post from './componets/Post';
import PostInput from './componets/PostInput';
const App = () => {

  const postDataBase = [
    { author: 'Santiago', post: 'Hola a todos, como están?', id:1 },
    { author: 'Rhoynarr', post: 'Todo bien! a quien cazamos hoy?', id: 2 },
    { author: 'Sadoc', post: 'Consigan chamba xd', id: 3 },
  ]

  return (
    <>
      <div className='input-zone'>
        <PostInput />
      </div>
      <div className='feed-zone'>
        <Post data={postDataBase}/>
      </div>

    </>
  )
}

export default App;
