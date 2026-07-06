import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../services/Urlpath";

function Userprofile() {
    const [user, setuser] = useState({
        Profile: "http://via.placeholder.com/150",
        FullName: "afrida khatoon",
        DOB: "9-9-2025",
        Email: "afrida@gmail.com",
        Address: "siwan",
        Course: "BCA",
        Phone: "65476584765",
        Password: "12345",
    })

    /* const getemail = ()=>{
        const Email = sessionStorage.getItem('currentuser');
        axios.post(`${baseurl}/singleuser`,{Email}).then((r)=>{
            console.log(r);
            setuser(r.data.userlist)
            
        })
    } */
    const getemail = () => {

        const Email = sessionStorage.getItem("currentuser");

        axios.post(`${baseurl}/singleuser`, { Email })
            .then((r) => {

                console.log(r.data.userlist);

                setuser(r.data.userlist);

            })

    }


    useEffect(() => {
        getemail();
    }, []);

    /* const [user,setUser] = useState({});
    
    
    useEffect(()=>{
    
    axios.post("http://localhost:9000/singleuser",{
    
    Email: localStorage.getItem("Email")
    
    })
    .then((res)=>{
    
    setUser(res.data.userlist)
    
    })
    .catch((err)=>{
    
    console.log(err)
    
    })
    
    
    },[])
     */


    return (

        <div className="profile-wrapper">


            <div className="profile-box">


                <h1 className="title">
                    MY PROFILE
                </h1>



                <div className="top-section">


                    <div className="image-box">

                        <img

                            src={user?.Profile || "https://i.pravatar.cc/300"}

                            alt="profile"

                        />

                    </div>



                    <div className="user-head">

                        <h2>

                            {user?.FullName}

                            <span>✔</span>

                        </h2>


                        <p>MERN Developer</p>

                        <p>📍 {user?.Address}</p>


                    </div>


                </div>





                <div className="section">


                    <h2>👤 PERSONAL INFORMATION</h2>


                    <div className="details">


                        <div>
                            <label>FullName</label>
                            <p>{user?.FullName}</p>
                        </div>


                        <div>
                            <label>Email</label>
                            <p>{user?.Email}</p>
                        </div>


                        <div>
                            <label>Phone</label>
                            <p>{user?.Phone}</p>
                        </div>


                        <div>
                            <label>Date Of Birth</label>
                            <p>{user?.DOB}</p>
                        </div>


                        <div>
                            <label>Course</label>
                            <p>{user?.Course}</p>
                        </div>


                        <div>
                            <label>Address</label>
                            <p>{user?.Address}</p>
                        </div>


                    </div>


                </div>





                <div className="section security">


                    <h2>🔐 ACCOUNT SECURITY</h2>


                    <div className="security-box">

                        <p>
                            🔒 Password
                            <span>••••••••</span>
                        </p>


                        <p>
                            🟢 Status
                            <span>Active</span>
                        </p>


                        <p>
                            📧 Email
                            <span>Verified</span>
                        </p>


                    </div>


                </div>





                <div className="actions">


                    <button className="edit">

                        ✏ Edit Profile

                    </button>



                    <button className="pass">

                        🔐 Change Password

                    </button>



                    <button className="logout">

                        🚪 Logout

                    </button>


                </div>



            </div>


        </div>


    )

}


export default Userprofile;