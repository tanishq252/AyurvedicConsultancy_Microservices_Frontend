import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import image from "../../images/home.svg";
import cardimg from "../../images/card.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./prescription.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const PrescriptionPage = () => {
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);

  const userId = localStorage.getItem("userId");
  const client = localStorage.getItem("client");
  const { state } = useLocation();
  const queryId = state.queryId;

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    var array;
    var arr = [];
    await axios
      .get("http://localhost:3001/doctorService/prescriptions")
      .then((response) => {
        array = response.data;
        arr = array.filter((obj) => {
          return obj.queryId == queryId;
        });
        arr.reverse();
        setData(arr);
        console.log(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    data.length == 0?<><Navbar/><center>
    <h2>None of the doctors have prescribed yet</h2>
  </center>:</>:
    <>
      <Navbar />
      {data.map((item) => {
        return (
          <>
            <div className="querycontainer">
              <div className="body">{item.body}</div>
              <div className="viewpresc">Prescribed by: {item.doctorname}</div>
            </div>
          </>
        );
      })}
      <ToastContainer />
      <br></br>
      <Footer />
    </>
  );
};

export default PrescriptionPage;
