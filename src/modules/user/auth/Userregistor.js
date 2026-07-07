import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { baseurl } from "../../services/Urlpath";
import "../../../css/style.css"

function Userregistor() {
  const mynav = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const mysubmit = (e) => {
    axios.post(`${baseurl}/userregistor`, e).then((r) => {
      if (r.data.status === 230) {
        toast.warning(r.data.msg, { autoClose: 2000, theme: "dark", position: 'top-left' });
      }
      if (r.data.status === 220) {
        toast.success(r.data.msg, { autoClose: 2000, theme: "dark", position: 'top-left' });
        setTimeout(() => {
          mynav("/users");
        }, 2000);
      }
    })
      .catch((err) => {
      })
  }
  return (
    <div className="register-bg">
      <div className="register-box">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Register your details</p>

        <form onSubmit={handleSubmit(mysubmit)}>
          <div className="row g-3">
            {/* Full Name */}
            <div className="col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                {...register("FullName")}
              />
            </div>
            {/* Email */}
            <div className="col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("Email")}
              />
            </div>
            {/* DOB */}
            <div className="col-md-6">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                {...register("DOB")}
              />
            </div>
            {/* Course */}
            <div className="col-md-6">
              <label>Course</label>
              <select
                className="form-select"
                {...register("Course")}
              >
                <option>Select Course</option>
                <option>React</option>
                <option>Node JS</option>
                <option>Full Stack</option>
                <option>Java</option>
              </select>
            </div>
            {/* Address */}
            <div className="col-md-6">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                {...register("Address")}
              />
            </div>
            <div className="col-md-6">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                {...register("Phone")}
              />
            </div>
            {/* Profile */}
            <div className="col-md-6">
              <label>Profile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter profile name"
                {...register("Profile")}
              />
            </div>
            {/* Password */}
            <div className="col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                {...register("Password")}
              />
            </div>
          </div>
          <button className="register-button">
            Register
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Userregistor;