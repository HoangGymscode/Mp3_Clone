import { useState } from "react";
import React from 'react';
import { Home,Login, Public } from "./containers/public";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";

function App() {
  return (
    <>
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}></Route>
          <Route path={path.LOGIN} element={<Login/>}></Route>
        </Route>
      </Routes>
   
    </div>

      <ToastContainer
        // Cài đặt báo lỗi bằng toastify
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
