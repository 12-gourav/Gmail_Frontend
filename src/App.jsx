import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { check, getInfo } from "./redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Template from "./pages/Template";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadUser();
  }, [dispatch]);
  const authtoken = localStorage.getItem("token");
  const loadUser = async () => {
    await getInfo(authtoken)
      .then((res) => {
        dispatch({ type: "load", payload: res?.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/template" element={<Template />} />
      </Routes>
    </>
  );
};

export default App;
