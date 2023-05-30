import React,{useEffect,useState} from 'react'
import axios from 'axios'
const UserList = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{setData(response.data)
    console.log(response)
    
    })
    },[])
  return (
    <>
    {data.map((e)=>(<div>
    The Name is:{e.name}    


    </div>))}
    </>
  )
}

export default UserList