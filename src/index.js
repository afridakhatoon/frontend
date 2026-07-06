


import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appheader from "./modules/admin/sharecomponents/Appheader"
import Appsidebar from "./modules/admin/sharecomponents/Appsidebar"
import Appfooter from "./modules/admin/sharecomponents/Appfooter"
import Userlogin from './modules/user/auth/Userlogin';
import Userregistor from './modules/user/auth/Userregistor';
import Welcome from './Welcome';
import Masterpage from './modules/usercomponents/Masterpage';

import Blankpage from './modules/user/layouts/Blankpage';
import Userprofile from './modules/usercomponents/Userprofile';
import Userlist from './modules/usercomponents/Userlist';
import Usereditpage from './modules/usercomponents/Usereditpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      {/* <Routes>
        <Route
          path="/userupdate/:id"
          element={<Usereditpage />}/>
        <Route path='userlist' element={<Userlist />}></Route>
        <Route path='' element={<Welcome />}></Route>
        <Route path='users' element={<Blankpage />}>
          <Route path='' element={<Userlogin />}></Route>
          <Route path='registor' element={<Userregistor />}></Route>
          <Route path='dashboard' element={<Masterpage />}>
            <Route path='' element={<Userprofile />}></Route>

          </Route>
        </Route>
      </Routes>

 */}


      <Routes>

        <Route path="/" element={<Welcome />} />

        <Route path="/users" element={<Blankpage />}>
          <Route index element={<Userlogin />} />
          <Route path="registor" element={<Userregistor />} />

          <Route path="dashboard" element={<Masterpage />}>
            <Route index element={<Userprofile />} />
          </Route>
        </Route>

        <Route path="/userlist" element={<Userlist />} />
        <Route path="/userupdate/:id" element={<Usereditpage />} />

      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);


