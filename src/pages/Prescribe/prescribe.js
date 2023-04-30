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
import "./prescribe.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Prescribe = () => {
  let prescriptionObj = null;

  const [data, setData] = useState([]);
  const [prescribed, setPrescribed] = useState(prescriptionObj ? true : false);
  // let prescribed = false;
  const [prescription, setPrescription] = useState(prescriptionObj ? prescriptionObj.body : "");
  const [submitType, setSubmitType] = useState("");


  const navigate = useNavigate();

  let presc=[];

  const userId = localStorage.getItem("userId");
  const client = localStorage.getItem("client");
  const { state } = useLocation();
  const queryId = state.queryId;

  const [prescId, setprescId] = useState(queryId)

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
        presc = arr.filter(
          (prescription) => prescription.doctorId == userId
        );
        if (presc) {
          console.log("prescription Given");
          prescriptionObj = presc[0];
          setprescId(prescriptionObj._id)
          setPrescription(prescriptionObj.body);
          // prescribed = true;
          setPrescribed(true);
        }
      })
      .catch(function (error) {
        toast.error(`${e.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
      console.log(prescriptionObj);

  };

  const createPrescription = async (e) => {
    e.preventDefault();
    if (prescription === "") {
      toast.warn("You have not entered any prescription", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } else {
      try {
        const res = await axios.post(
          `http://localhost:3001/doctorService/${userId}/${queryId}/prescription`,
          {
            body: prescription,
          }
        );
        toast.success(`Your prescription has been added successfully!`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        setTimeout(()=>{navigate('/answerQueries')}, 2000)
        getData();
      } catch (e) {
        console.log(e.response.data);
        toast.error(`${e.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
    }
  };

  const updatePrescription = async (e) => {
    console.log(prescId);
    try{
      // console.log(prescriptionObj._id);
      const res = await axios.patch(
        `http://localhost:3001/doctorService/${prescId}`,
        {
          body: prescription,
        }
      );
      toast.success(`Your prescription has been updated successfully!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      setTimeout(()=>{navigate('/answerQueries')}, 2000)
    }catch (e) {
        console.log(e);
        toast.error(`${e}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
  };

  const deletePrescription = async (e) => {
    try{
      const res = await axios.delete(
        `http://localhost:3001/doctorService/${queryId}/${prescId}`
      );
      toast.success(`Your prescription has been deleted successfully!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      setTimeout(()=>{navigate('/answerQueries')}, 2000)
    }catch (e) {
        console.log(e.response.data);
        toast.error(`${e.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
  };

  const submitPrescription = async (e) => {
    e.preventDefault();
    if(submitType == "update"){
      updatePrescription();
    }else{
      deletePrescription();
    }
  };

  return (
    <>
      <Navbar />
      <>
        { prescribed ? (
          <>
            <p className="text">
              You have already given your prescription, if there are any changes
              please update!
            </p>
            <div class="form-style-6">
              <form onSubmit={submitPrescription}>
                <textarea
                  value={prescription}
                  placeholder="Please enter your query"
                  onChange={(e) => setPrescription(e.target.value)}
                ></textarea>
                <input
                  type="submit"
                  value="Update this prescription"
                  // onClick={submitPrescription}
                  onClick={(e) => setSubmitType("update")}

                />
                <br></br>
                <input
                  type="submit"
                  value="Delete this prescription"
                  onClick={(e) => setSubmitType("delete")}
                />
              </form>
            </div>
          </>
        ) : (
          <>
            <p className="text">
              You have not given a prescription yet! Please provide a proper
              prescription!
            </p>
            <div class="form-style-6">
              <form onSubmit={createPrescription}>
                <textarea
                  value={prescription}
                  placeholder="Please enter your prescription"
                  onChange={(e) => setPrescription(e.target.value)}
                ></textarea>
                <input type="submit" value="Send this prescription" />
              </form>
            </div>
          </>
        )}
      </>
      <ToastContainer />
      <br></br>
      <Footer />
    </>
  );
};

export default Prescribe;
