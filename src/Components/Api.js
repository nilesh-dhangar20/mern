import React,{useState,useEffect} from 'react'

const Api = () => {
    const [data, setData] = useState("paragraph");
      useEffect(() => {
        fetch("/apiserver")
          .then((res) => res.json())
          .then((data) => 
          {
          console.log(data.massage);
            setData(data.massage)}).catch((err)=>console.log(err));
      }, []);

    return (
        <div className="text-black">
          <header className="App-header">
        <h1 >api page</h1>
        <h3>how are you getting something</h3>
            <p>{data}</p>
            </header>
        </div>
    )
}

export default Api
