import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TextField from '@material-ui/core/TextField';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EmailIcon from '@material-ui/icons/Email';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink ,useHistory} from 'react-router-dom';

// or
// import { TextField } from '@material-ui/core';
// or
// import { FilledInput } from '@material-ui/core';
const Signup = () => {
    const history=useHistory();
    const [registerData, setregisterData] = useState(
        {
            name:"",
            email:"",
            phone:"",
            password:"",
            cpassword:"",

        }
       
    );
  
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setregisterData({...registerData,[name]:value})
             
             
    }
    const postData=async (event)=>{
        try{

   
event.preventDefault();
const {name,email,phone,password,cpassword}=registerData;
const res=await fetch('/register',{
    method:"POST",
    headers:{
          "content-type":"application/json"
              },
          body:JSON.stringify({
            name,email,phone,password,cpassword
                         })
        });
      const data= await res.json();
      if(data.status===422 ||!data)
      {
          window.alert("invalid registration");
      }
      else{
          window.alert("successfull registration");
        history.push('/signin');      }
      }
      catch(err){
          console.log(err);

      }
}
    
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">SingUp</h2>
                            <form className="register-from" id="register-form" noValidate autoComplete="off" method="POST">


                                <PermIdentityIcon className="me-4 mt-5" /><span><TextField id="standard-basic" label="name" type="text" name="name" className="mt-3 mb-2" onChange={InputEvent} value={registerData.name}/></span> <br />
                                <EmailIcon className="me-4 mt-5" /><TextField id="standard-basic" label="email" type="email" name="email" className="mt-3 mb-2" onChange={InputEvent}  value={registerData.email}/><br />
                                <PermContactCalendarIcon className="me-4 mt-5" />  <TextField id="standard-basic" label="phone" type="number" name="phone" className="mt-3 mb-2"onChange={InputEvent} value={registerData.phone} /><br />
                                <LockIcon className="me-4 mt-5" />    <TextField id="standard-basic" label="password" type="text" name="password" className="mt-3 mb-2" onChange={InputEvent}  value={registerData.password}/><br />
                                <LockIcon className="me-4 mt-5" />        <TextField id="standard-basic" label="confirmpassword" type="text" name="cpassword" className="mt-3 mb-2" onChange={InputEvent}  value={registerData.cpassword}/>
                                <div className="row">
                                    <div className="col">
                                        <div className="form_button mt-4">
                                            <input type="submit" name="signup" className="btn btn-primary form-submit" onClick={postData} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="  mt-4 form-submit">
                                            <button className="btn btn-primary  login_button">
                                                <NavLink to="/signin" className="text-white text-capitalize">Login</NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </section>
            <div className="signup_input_div ">

            </div>
        </>
    )
}

export default Signup;























