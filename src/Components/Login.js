import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink ,useHistory} from 'react-router-dom';
const Login = () => {
    const history=useHistory();
    const [userlogin, setUserLogin] = useState({
        email:"",
        password:""
    });
    const inputEvent=(event)=>{
        const{name,value}=event.target;
        setUserLogin({...userlogin,[name]:value});
    };
    const postData=async (event)=>{
        try{
    
        event.preventDefault();
      const{email,password}=userlogin;
        const res=await fetch('/login',{
            method:"POST",
            headers:{
                 "content-type":"application/json"
                    },
                body:JSON.stringify({
                  email,password
                               })
              });
              const data= await res.json();
              if(data.status===400 || !data)
              {
                  window.alert("invalid crediations");
              }
              else{
                  window.alert("successfull login");
                  history.push('/');  
                };
            }
            catch(err)
            {
                console.log(err);
            }
    }
    

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <div className="container">
                                <div>
                                    <h2>Login</h2>
                                </div>
                                <form className="register-from" id="register-form" noValidate autoComplete="off" method="POST">
                                    <EmailIcon className="me-4 mt-5" /><TextField id="standard-basic" label="email" type="email" name="email" className="mt-3 mb-2" onChange={inputEvent}  value={userlogin.email}/><br />
                                    <LockIcon className="me-4 mt-5" />    <TextField id="standard-basic" label="password" type="text" name="password" className="mt-3 mb-2" onChange={inputEvent}  value={userlogin.password} /><br />
                                    <div className="row">
                                    <div className="col">
                                        <div className="form_button mt-4">
                                            <input type="submit" name="login" className="btn btn-primary form-submit" onClick={postData}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="  mt-4 form-submit">
                                            <button className="btn btn-primary  login_button">
                                                <NavLink to="/registeration" className="text-white text-capitalize">Register</NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    }

export default Login



