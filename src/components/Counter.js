import React,{useState} from 'react'

const Counter = ({step}) => {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count + step)
    }
    const decrement = () => {
        if(count - step < 0){
            alert("The value should not go below 0")
        }
        else{
            setCount(count - step)
        }
    }
    

  return (
    <div className='background'>
      <h2>Count: {count}</h2>
      <button className="inc" onClick={increment}>Increment</button>
      <button className="dec" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
