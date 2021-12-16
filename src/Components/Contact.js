import React ,{useState,useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EmailIcon from '@material-ui/icons/Email';
import HouseIcon from '@material-ui/icons/House';
import { NavLink ,useHistory} from 'react-router-dom';

const Contact = () => {
    const history=useHistory();
    const [massage, setmassage] = useState("");
    const [loginData, setloginData] = useState({});
    const collectdata=async()=>{
        try{
      
        const res= await fetch('/getData',{
            method:"GET",
            headers:{
                "content-type":"application/json",
            },
           
        });
        console.log(res);
        const data=await res.json();
        console.log(data);
       
        // res.status===200
      let st=(await res).status;
       if(st!==200)
     {
         history.push('/login');
         const error=new Error(res.error);
         throw error;
         
     }
     else{
    setloginData(data);
     }
    }
    
     catch(err)
        {
             console.log(err);
             history.push('/signup');
        }

    }
    useEffect(() => {
        collectdata();
    }, [])

     const inputEvent=(event)=>{
        //  massage=event.target.value;
         setmassage(event.target.value);
         
     }
     const postData=async()=>{
         try{
             if(massage==="")
             {
                 window.alert("please write massage");
                 console.log(massage);
             }
            
             else{
            
            const res=await fetch('/contactus',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                     massage
                })
            });
            window.alert("massage saved successfully");
            setmassage("");
        }
           
           
                 
            // const data=await res.json();
            
            // if(data.status===401 ||!data)
            // {
            //     window.alert("not saved massage");
            // }
            // else{
            //     window.alert("thankyou for your feedback");
            //   history.push('/signin');      }
    }
            
 
         catch(err)
         {
             console.log(err);
         }



     }
    return (
        <>

            <div className="container-fluid">
            {/* <form method="GET"> */}
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="row">
                            <div className="col-md-4 col-10 col-auto  mb-3 mt-3  ">

                                <div className=" contact_page_phone_div">
                                    <PermContactCalendarIcon className="me-2 ms-3"  /><span>{`${loginData.phone}`}</span>
                                </div>

                            </div>

                            <div className="col-md-4 col-10 col-auto  mb-3 mt-3  ">

                                <div className="contact_page_phone_div">
                                    <EmailIcon className="ms-3 me-2"  /><span>{`${loginData.email}`}</span>
                                </div>

                            </div>
                            <div className="col-md-4 col-10 col-auto  mb-3 mt-3  ">
                                <div className="contact_page_phone_div">
                                    <HouseIcon className="ms-3 me-2"  /><span> address</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* </form> */}
            </div>




            <div className="container mt-5 mb-2 get_in_touch">
            <form method="POST">
                <div className="row">
                    <div className="col-8 offset-2">

                        <div className="text-center">
                            <h2>Get in Touch</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 ">
                                <div className="row contact_secondDiv_input ">
                                    <div className="col-md-4 col-auto col-12 mb-3 mt-3">
                                        <div>
                                            <input type="text" placeholder="enter your name" className="ps-3"
                                             />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-auto col-12 mb-3 mt-3">
                                        <input type="number" placeholder="ener your phone" className="ps-3" />
                                    </div>
                                    <div className="col-md-4 col-auto col-12 mb-3 mt-3">
                                        <input type="text" placeholder="enter your addresss" autoComplete="off" className="ps-3"  />
                                    </div>
                                </div>
                                <div className="row mt-4 mb-2 contact_seconddiv_textarea">
                                    <div className="col-md-10 col-sm-6 col-auto">
                                        <textarea name="massage" id="massage" cols="100" rows="5" placeholder="massage" className="ps-4 me-4"
                                        value={massage} onChange={inputEvent}>

                                        </textarea>
                                        <div className="contact_seconddiv_button">
                                     
                                          <input type="button" name="sendMassage" value="SendMassage" className="btn btn-primary mt-3 mb-3"
                                          onClick={postData} />
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
              </form>
            </div>
        </>


    )
}

export default Contact;
