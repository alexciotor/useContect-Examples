import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useReducer,useState,useEffect, useContext} from 'react'
import{Article} from './article'
 const url = 'https://course-api.com/react-useReducer-cart-project'
const initialValue = {
  count:0,

}
const reducer =(state,action)=>{
if(action.type==='increment'){
  return {count:state.count+1}
}
if(action.type==='decrement'){
  return {count:state.count-1}
}
}
const PersonContext = React.createContext()
// Two components - provider, Consumer


 


function App() {
const[data,setData] =useState([])
const [loading, setIsLoading] =useState(false)
 const [state, dispatch] = useReducer(reducer, initialValue)

const getData = async()=>{
  setIsLoading(true)
  try{
    const response = await fetch(url)
    const data =  await response.json()
    setData(data)
    setIsLoading(false)
  }
  catch(error){
    console.log(error);
  }

}

 

useEffect(()=>{
  getData()
},[])
 

  return (
<PersonContext.Provider value={data}>
<section>
    <div  className='content '>
 <button className="btn" onClick={()=>{
   dispatch({type:'increment'})
 }}>+</button>
 <p>{state.count}</p>
 <button className="btn" onClick={()=>{
   dispatch({type:'decrement'})
 }} >-</button>
    </div>
    <Article  />
    </section>
    </PersonContext.Provider>
  );
}
export {PersonContext}
export default App;
