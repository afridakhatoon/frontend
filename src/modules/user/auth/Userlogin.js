import axios from 'axios';
import React, { use, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from '../../services/Urlpath';
import { toast, ToastContainer } from 'react-toastify';



function Userlogin() {
  const maynav = useNavigate();
  const [login, updatelogin] = useState({
    Email: "",
    Password: ""
  })
  const fieldupdate = (e) => {
    const { name, value } = e.target;
    updatelogin({
      ...login,
      [name]: value
    })
  }
  const mylogin = () => {
    axios.post(`${baseurl}/userlogin`, login,{withCredentials:true}).then((r) => {
      if (r.data.status === 210) {
        toast.warning(r.data.msg)
      }
      if (r.data.status === 211) {
        toast.warning(r.data.msg)
      }
      if (r.data.status === 240) {
        toast.error(r.data.msg)
      }
      if (r.data.status === 251) {
        toast.success(r.data.msg);
        sessionStorage.setItem(
          "currentuser",
          r.data.userinfo
        ); setTimeout(() => {
          maynav('/users/dashboard')
        }, 1000)
      }
      if (r.data.status === 260) {
        toast.warning(r.data.msg)
      }
    })
  }
  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Please login to your account</p>

          <form>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              value={login.Email} onInput={fieldupdate} name='Email'
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              value={login.Password} onInput={fieldupdate} name='Password'
            />


            <input type='button' class="btn btn-success" value="login" onClick={mylogin} />
            <Link to="/users/registor">user</Link>
          </form>


        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Userlogin
