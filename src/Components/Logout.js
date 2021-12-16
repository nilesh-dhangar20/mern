import React,{useEffect} from 'react'
import { useHistory } from 'react-router'

const Logout = () => {
    const history=useHistory();
    useEffect(() => {
      fetch('/logout',{
           method:"GET",
          headers:{
              "content-type":"application/json",
          }
       }).then((res)=>{
            history.push('/signin',{replace:true});
       }
           
       ).catch((err)=>{
           console.log(err);
       })


       
    }, [])
    return (
        <>
            
        </>
    )
}

export default Logout
