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