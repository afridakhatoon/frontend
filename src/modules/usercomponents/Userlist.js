//import "../../css/style.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../services/Urlpath";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("table");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${baseurl}/api`)
      .then((res) => {
        setUsers(res.data.datalist);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    if (window.confirm("Do you want to delete this user?")) {
      axios.delete(`${baseurl}/userdelete/${id}`).then(() => {
        alert("User Deleted Successfully");
        getUsers();
      });
    }
  };
  const navigate = useNavigate();
  const editUser = (id) => {
    navigate("/userupdate/" + id);
  };

  const filterData = users.filter((item) =>
    item.FullName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-page">

      <div className="header">

        <h2>Student List</h2>

        <div className="top-right">

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className={view === "table" ? "active" : ""}
            onClick={() => setView("table")}
          >
            Table View
          </button>

          <button
            className={view === "card" ? "active" : ""}
            onClick={() => setView("card")}
          >
            Card View
          </button>

        </div>

      </div>

      {view === "table" ? (

        <div className="table-box">

          <table>

            <thead>

              <tr>

                <th>Full Name</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Password</th>
                <th>Course</th>
                <th>Address</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filterData.map((item) => (

                <tr key={item._id}>

                  <td>{item.FullName}</td>
                  <td>{item.DOB}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Email}</td>
                  <td>••••••••</td>
                  <td>{item.Course}</td>
                  <td>{item.Address}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => editUser(item._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(item._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      ) : (

        <div className="card-container">

          {filterData.map((item) => (

            <div className="student-card" key={item._id}>

              <h3>{item.FullName}</h3>

              <div className="info">
                <p><b>Email :</b> {item.Email}</p>
                <p><b>Phone :</b> {item.Phone}</p>
                <p><b>DOB :</b> {item.DOB}</p>
                <p><b>Course :</b> {item.Course}</p>
                <p><b>Address :</b> {item.Address}</p>
                <p><b>Password :</b> ••••••••</p>
              </div>

              <div className="btn-group">

                <button
                  className="edit-btn"
                  onClick={() => editUser(item._id)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteUser(item._id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Userlist;