import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVisit, updateVisit } from "../redux/Slices/visitSlice";
import { v4 as uuidv4 } from "uuid";

const AddNewVisit = () => {
  const [visitData, setVisitData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  
  const handleChange = (e) => {
    setVisitData({ ...visitData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createVisit(visitData));
    toast.success("Visit added successfully!");
    navigate("/visits");
  };
  
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <MDBCardBody>
          <h2>{visitData.title}</h2> {/* Added title here */}
          <MDBValidation className="row g-3" noValidate onSubmit={handleSubmit}>
            <div className="col-md-12">
              <MDBInput
                onChange={handleChange}
                placeholder="Enter Title"
                type="text"
                name="title"
                className="mb-4"
                required
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                onChange={handleChange}
                placeholder="Enter Description"
                type="textarea"
                name="description"
                className="mb-4"
                required
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                onChange={handleChange}
                placeholder="Enter imageUrl"
                type="text"
                name="imageUrl"
                className="mb-4"
                required
              />
            </div>

            <div className="col-md-12">
              <MDBBtn color="primary" type="submit">
                Add
              </MDBBtn>
              <MDBBtn color="secondary">Clear</MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddNewVisit;
