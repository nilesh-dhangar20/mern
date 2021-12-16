
import React, { useState,useEffect} from 'react'

const Home = () => {
    const [userName, setuserName] = useState('');
    const getName=async()=>{
       try{
  const res=await fetch('/home',{
  method:"GET",
  headers:{
      "content-type":"application/json",
  }
  });
  const data=await res.json();
   setuserName(data.name);

       }
       catch{

       }
    }
    useEffect(() => {
       getName();
    },)
    return (
        <>
        <div className="text-center mt-5">
        <form method="GET">
             <p>welcome</p>
             <h1>{userName}</h1>
      <h2>we are the Mern Developer</h2>
        </form>
        </div>
    
        </>
    )
}

export default Home
