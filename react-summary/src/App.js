import './App.css';
import React, { Fragment } from 'react';
import Post from './componets/Post';

const App = () => { 

  const postDataBase = [
    { author: 'Santiago', message: 'Hola a todos, como están?' },
    { author: 'Rhoynarr', message: 'Todo bien! a quien cazamos hoy?' },
    { author: 'Sadoc', message: 'Consigan chamba xd' },
  ]

  return (
    <Fragment>
      <Post postAuthor={postDataBase[0].author} postMessage={postDataBase[0].message} />
      <Post postAuthor={postDataBase[1].author} postMessage={postDataBase[1].message} />
      <Post postAuthor={postDataBase[2].author} postMessage={postDataBase[2].message} />
    </Fragment>
  )
}

export default App;
