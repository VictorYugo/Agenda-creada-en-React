import React, {useState} from 'react';

import {useHttp} from './hooks/useHttp'

const App = () => {
  const [id, setId] = useState(1)
  const [post] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const handlePrevId = () => {
    if (id>1) setId(id - 1)
  }

  const handleNextId = () => {
    setId(id + 1)
  }

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={handlePrevId}>Prev</button>
        <button onClick={handleNextId}>Next</button>
        <p>{id}</p>
      </div>
    )
  

}

export default App;