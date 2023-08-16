import React, {useState} from 'react';
import './App.css';
import Post from './componets/Post';
import PostInput from './componets/PostInput';
const App = () => {

  let postDataBase = [
    { author: 'Santiago', post: 'Hola a todos, como están?', id:1 },
    { author: 'Rhoynarr', post: 'Todo bien! a quien cazamos hoy?', id: 2 },
    { author: 'Sadoc', post: 'Consigan chamba xd', id: 3 },
  ]
  
  const [stateDB, setStateDB] = useState(postDataBase);

  const addItemHandler = item => {
    setStateDB(prev => { 
      return ([...prev, item]);
    });
  };

  return (
    <>
      <div className='input-zone'>
        <PostInput onAddItem={addItemHandler}/>
      </div>
      <div className='feed-zone'>
        <Post data={stateDB} />
      </div>

    </>
  )
}

export default App;
