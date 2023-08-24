import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './componets/Post';
import PostInput from './componets/PostInput';
import Header from './componets/Header';
const App = () => {

  const [stateDB, setStateDB] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const responseJSON = await response.json();
      setStateDB(responseJSON.posts);
      setIsFetching(false);
    }
    fetchAPI();
  }, []);

  const [isPosting, setIsPosting] = useState(false);

  const addItemHandler = item => {

    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      }

    });
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
        <Header onActivatePostInput={activatePostInputHandler} />
        
        {isPosting && <PostInput onAddItem={addItemHandler} onActivatePostInput={activatePostInputHandler} />
        }
        
      </div>

      <div className='feed-zone'>
        {isFetching ? 
          <h2 style={{display:'grid', placeItems:'center', color:'white'}}>Loading posts...</h2>
          :
          <Post data={stateDB} />
        }
        
      </div>

    </>
  )
}

export default App;
