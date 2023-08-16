import React, {useState} from 'react';
import './App.css';
import Post from './componets/Post';
import PostInput from './componets/PostInput';
import Header from './componets/Header';
const App = () => {

  let postDataBase = [
    { author: 'Santiago', post: 'Hola a todos, como están?', id:1 },
    { author: 'Rhoynarr', post: 'Todo bien! a quien cazamos hoy?', id: 2 },
    { author: 'Sadoc', post: 'Consigan chamba xd', id: 3 },
  ]
  
  const [stateDB, setStateDB] = useState(postDataBase);

  const [isPosting, setIsPosting] = useState(false);

  const addItemHandler = item => {
    setStateDB(prev => { 
      return ([...prev, item]);
    });
  };

  const activatePostInputHandler = e => { 
    setIsPosting(e);
  }

  return (
    <>
      <div className='input-zone'>

        {isPosting
          ?
          <PostInput onAddItem={addItemHandler} onActivatePostInput={activatePostInputHandler} />
          :
          <Header onActivatePostInput={activatePostInputHandler} />
        }
        
      </div>

      <div className='feed-zone'>
        <Post data={stateDB} />
      </div>

    </>
  )
}

export default App;
