import React, { useEffect } from "react";
import Button from "./../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import useGetSingleCourse from "../hooks/useGetSingleCourse";

function CourseDetails() {
  const navigate = useNavigate();
  const { id: courseId } = useParams();

  const {
    mutate: getSingleCourseFn,
    isPending: getSingleCourseLoading,
    isSuccess: getSingleCourseSuccess,
    isError: getSingleCourseError,
    error: getSingleCourseErrorMessage,
    data: getSingleCourseData,
  } = useGetSingleCourse();

  useEffect(() => {
    const payload = {
      courseId: courseId,
    };

    getSingleCourseFn(payload);
  }, []);

  if (getSingleCourseLoading) {
    return (
      <div className="w-full min-h-[300px] flex justify-center items-center">
        <div className="loading"></div>
      </div>
    );
  }

  const {
    id,
    description,
    schedule,
    students,
    syllabus,
    thumbnail,
    duration,
    enrollmentStatus,
    instructor,
    location,
    name,
    prerequisites,
  } = getSingleCourseData || {};

  return (
    <div className="detail-container">
      <div className="detail-container-center wrapper">
        <div className="back-btn mb-10">
          <Button
            isBackBtn={true}
            title={"Back"}
            handleClick={() => navigate("/")}
          ></Button>
        </div>
        {/* <div>
            <h2></h2>
        </div> */}
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="image-container h-[280px] w-full">
            <img
              src={thumbnail}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="main-detail-container w-full flex  flex-col items-center gap-4 justify-start">
            <div className="w-full flex  items-center gap-4 justify-start">
              <p className="text-xl font-bold">name:</p>
              <span className="text-base">{name}</span>
              {/* <button className="custom-button ">Course Details</button> */}
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">instructor:</p>
              <span className="text-base">{instructor}</span>
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">description:</p>
              <span className="text-base">{description}</span>
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">EnrollmentStatus:</p>
              <span className="text-base">{enrollmentStatus}</span>
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">duriation:</p>
              <span className="text-base">{duration}</span>
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">shedule:</p>
              <span className="text-base">{schedule}</span>
            </div>

            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">location:</p>
              <span className="text-base">{location}</span>
            </div>
            <div className="cost-grams-container w-full flex items-center gap-4 justify-start">
              <p className="text-xl font-bold">prerequisities:</p>
              <span className="text-base">{prerequisites}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
