import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink,useHistory } from 'react-router-dom';





const About = () => {
    const history=useHistory();
    const [userdata, setUserData] =useState({});

    const callaboutpage=async()=>{
        try{
            console.log("enter the try of about page");
    const res=await fetch('/aboutme',{
        method:"GET",
        headers:{
            // Accept:"appllication/json",
            "Content-Type":"application/json"
        },
        // credentials:"include",
    });
     const data=await res.json();
     console.log(data);
    setUserData(data);
     if(!res.status===200)
     {
        history.push('/signin');
         const error=new Error(res.error);

         throw error;
        
     }
     }
        catch(err)
        {
             console.log(err);
             history.push('/signin');
        }
    }
    useEffect(() => {
       callaboutpage();
    }, []);
    return (
        <div className="container-fluid mt-5">
            <form method="GET">
                <div className="row">
                    <div className="col-md-10 offset-2">
                        <div className="row">
                            <div className="col-md-4 col-10 mt-3 mb-3 col-auto ">
                                <div className="row mt-2 mb-2">
                                    <div className="col-12 text-black">
                                        <img src="" alt="photo" />
                                    </div>
                                    <div className="row mt-2 mb-2">
                                        <div className="col-12 text-black">
                                            <ul>
                                                <li>biodata</li>
                                                <li>biodata</li>
                                                <li>biodata</li>
                                                <li>biodata</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 col-10 mt-3 mb-3 col-auto">
                                <div className="row">
                                    <div className="col text-black">
                                        <h3>Intro</h3>
                                        <p className="Aboutme_para">Web Developer</p>
                                        <p>Ranking 1/10</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6 col-12 col-auto ">
                                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                            </li>

                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                                <div><ul className="Aboutme_para">
                                                    <li>{userdata.name}</li>
                                                    <li>{userdata.email}</li>
                                                    <li>About</li>
                                                    <li>About</li>
                                                    <li>About</li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <div>
                                                    <ul className="Aboutme_para">
                                                        <li>Home</li>
                                                        <li>Home</li>
                                                        <li>Home</li>
                                                        <li>Home</li>
                                                        <li>Home</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 col-10 mt-3 mb-3 col-auto">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-auto mt-md-1 mb-md-5">
                                    <button><NavLink to='editprofile' className="text-decoration-none text-black">editprofile</NavLink></button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-auto mt-md-5 mt-2 mb-2">
                                        <ul className="Aboutme_para">
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default About;
