import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {baseurl} from "../services/Urlpath";
import "../../css/style.css";

function Usereditpage(){
const {id} = useParams();
const navigate = useNavigate();
const [user,setUser] = useState({
FullName:"",
Email:"",
Phone:"",
Address:"",
DOB:"",
Course:"",
Profile:"",
Password:""
});
useEffect(()=>{
getSingleUser();
},[])
const getSingleUser = ()=>{
axios.get(`${baseurl}/singledata/${id}`,{withCredentials:true})
.then((res)=>{
console.log(res.data.user);
setUser(res.data.user);
})
}
const changeValue=(e)=>{
setUser({
...user,
[e.target.name]:e.target.value
})
}
const updateUser=()=>{
axios.patch(`${baseurl}/userupdate/${id}`,user)
.then((res)=>{
alert("User Updated Successfully");
navigate("/userlist");
})
}
return(
<div className="edit-container">
<div className="edit-card">
<h2>Edit User</h2>
<input
name="FullName"
value={user.FullName}
onChange={changeValue}
placeholder="Full Name"
/>
<input
name="Email"
value={user.Email}
onChange={changeValue}
placeholder="Email"
/>
<input
name="Phone"
value={user.Phone}
onChange={changeValue}
placeholder="Phone"
/>
<input
name="Address"
value={user.Address}
onChange={changeValue}
placeholder="Address"
/>
<input
name="DOB"
value={user.DOB}
onChange={changeValue}
placeholder="DOB"
/>
<select
name="Course"
value={user.Course}
onChange={changeValue}
>
<option>BCA</option>
<option>React</option>
<option>Node JS</option>
<option>Full Stack</option>
</select>
<input
name="Profile"
value={user.Profile}
onChange={changeValue}
placeholder="Profile"
/>
<input
name="Password"
value={user.Password}
onChange={changeValue}
placeholder="Password"
/>
<button onClick={updateUser}>
Update User
</button>
</div>
</div>
)
}
export default Usereditpage;