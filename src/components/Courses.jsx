import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="card-container border border-solid border-gray-300 shadow-xl">
      <div className="card-container-center ">
        <div className="image-container h-[280px] w-full">
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="reactnative"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="detail-container flex flex-col gap-4 mt-4">
          <div className="each-detail-container w-full flex  items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">name:</p>
            <span className="text-base">Introduction Of React Native</span>
            <Button
              className="custom-button "
              handleClick={() => navigate("/coursedetails")}
              title={"Course Details"}
            ></Button>
          </div>
          {/* <div className="each-detail-container w-full flex  items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">name:</p>
            <span className="text-base">Introduction Of React Native</span>
            <button className="custom-button " onClick={props.openAddPopup}>
              Course Details
            </button>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">instructor:</p>
            <span className="text-base">John Doe</span>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">description:</p>
            <span className="text-base">
              learn the basics of react native development
            </span>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">EnrollmentStatus:</p>
            <span className="text-base">open</span>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">duriation:</p>
            <span className="text-base">8 Weeks</span>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">shedule:</p>
            <span className="text-base">
              tuesday and thursday , 6:00 PM - 8:00 PM
            </span>
          </div>

          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">location:</p>
            <span className="text-base">Online</span>
          </div>
          <div className="cost-grams-container w-full flex items-center gap-4 justify-start px-4">
            <p className="text-xl font-bold">prerequisities:</p>
            <span className="text-base">basic javascript knowledge</span>
          </div> */}

          {/* <div className="w-full h-[5px] bg-blue-500 my-4 px-4"></div> */}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
