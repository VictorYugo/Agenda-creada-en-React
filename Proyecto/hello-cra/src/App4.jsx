import React, {useState, useEffect} from 'react';

const App = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  
  useEffect( () => {
    console.log('Mounted')
    const time = setInterval(() => setDate(new Date().toLocaleTimeString()),1000)
    return () => {
      clearInterval(time);
    }
  })
  
  const [number,setNumber] = useState(10)

  const handleIncrement = () => {
    setNumber(number+1)
  }

  const handleDecrement = () => {
    setNumber(number-1)
  }

  const handleReset = () => {
    setNumber(0)
  }

    return (
      <div>
        <h1>Hora: {date}</h1>
        <h1>Number: {number}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    )
  

}

export default App;