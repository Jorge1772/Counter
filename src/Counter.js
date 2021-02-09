import React ,{ useState }from 'react';


export default function CounterHooks({initialCount}){
const [count, setCount] = useState(initialCount)
    
    return(
    <div>
        <button className='btn' onClick={()=> setCount(prevCount => -1 )}>-</button>
            <span>{count}</span>
        <button className='btn' onClick={()=> setCount(prevCount => +1 )}>+</button>
    </div>
  )  
}