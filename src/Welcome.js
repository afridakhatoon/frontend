/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseurl } from './modules/services/Urlpath'

function Welcome() {
    const [myapp, updateapp] = useState([])
    const myapplist = () => {
        axios.get(`${baseurl}/addlist`).then((d) => {
            console.log(d.data.addlist);
            updateapp(d.data.addlist);

        })
    }
    useEffect(() => {
        myapplist();
    }, []);
    return (
       <div className='contaier-fluid'>
            <div className='row'>
                {myapp.map((m) => {
                    return (
                        <div className='col-md-3 mt-3'>
                            <Link to={m.approute} className='card shadow'>
                                <div className={`card-body text-black text-center `+ m.apptheams}>
                                    <h5 className='card-tittle'>{m.approute}</h5>
                                    <p className='card-text'>{m.appname}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>

        </div>

    )
}

export default Welcome
 */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseurl } from "./modules/services/Urlpath";
import "./css/style.css"
import { FaTachometerAlt, FaCogs, FaCalculator, FaKey, FaChartLine, FaCreditCard, FaBoxOpen, FaUniversity, FaClipboardList, FaIndustry, FaUsers, FaFileAlt } from "react-icons/fa";

function Welcome() {
    const [myapp, updateapp] = useState([]);

    useEffect(() => {
        axios.get(`${baseurl}/addlist`).then((res) => {
            updateapp(res.data.addlist);
        });
    }, []);
    const icons = {
        users: <FaTachometerAlt size={60} />,
        administration: <FaCogs size={60} />,
        finance: <FaCalculator size={60} />,
        fixedassets: <FaKey size={60} />,
        sales: <FaChartLine size={60} />,
        purchase: <FaCreditCard size={60} />,
        inventory: <FaBoxOpen size={60} />,
        banking: <FaUniversity size={60} />,
        planning: <FaClipboardList size={60} />,
        production: <FaIndustry size={60} />,
        hr: <FaUsers size={60} />,
        reports: <FaFileAlt size={60} />
    };

    return (
        <div className="dashboard-container">

            {/* Search Box */}
            <div className="search-box">
                <input type="text" placeholder="Search here..." />
            </div>

            {/* Apps */}
            <div className="app-grid">
                {myapp.map((m, index) => (
                    <Link to={m.approute} className="app-card" key={index}>
                        <div className={`icon-circle ${m.apptheams}`}>
                            <div className={`icon-circle ${m.apptheams}`}>
                                {icons[m.approute.toLowerCase()]}
                            </div>
                        </div>

                        <h6>{m.appname}</h6>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Welcome;