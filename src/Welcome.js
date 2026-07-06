import axios from 'axios'
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

        /*<div className='contaier-fluid'>
            <div className='row'>
        
                        <div className='col-md-3 mt-3'>
                            <Link to="/" className='card shadow'>
                                <div className="card-body text-black text-center" >
                                    <h5 className='card-tittle'>Icon</h5>
                                    <p className='card-text'>bvbmnbmh</p>
                                </div>
                            </Link>
                        </div>

            </div>

        </div> */
    )
}

export default Welcome
