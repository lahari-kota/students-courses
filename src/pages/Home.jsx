import React, { useState, useEffect } from "react";
import Courses from "../components/Courses";
import { useNavigate } from "react-router-dom";
import useGetCourses from "../hooks/useGetCourses";

function Home(props) {
  const navigate = useNavigate();
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState({
    status: false,
    cardDetails: "",
  });

  const {
    mutate: getAllCoursesFn,
    isPending: getAllCoursesLoading,
    isSuccess: getAllCoursesSuccess,
    isError: getAllCoursesError,
    error: getAllCoursesErrorMessage,
    data: getAllCoursesData,
  } = useGetCourses();

  useEffect(() => {
    getAllCoursesFn();
  }, []);

  const openEditPopup = (course) => {
    setShowEditPopup({
      status: true,
      cardDetails: course,
    });
  };
  const closeEditPopup = () => {
    setShowEditPopup({
      status: false,
      courseDetails: "",
    });
  };

  function openAddPopup() {
    setShowAddPopup(true);
  }

  function closeAddPopup() {
    setShowAddPopup(false);
  }

  if (getAllCoursesLoading) {
    return (
      <div className="w-full min-h-[300px] flex justify-center items-center">
        <div className="loading"></div>
      </div>
    );
  }

  if (showAddPopup || showEditPopup.status) {
    return (
      <Courses
        isEditing={showEditPopup.status}
        courseDetails={showEditPopup.status}
        closeAddPopup={closeAddPopup}
      />
    );
  }
  return (
    <div className="home-container">
      <div className="home container-center wrapper page flex flex-col gap-10">
        <div>
          <h1 className="custom-title">Courses</h1>
          <div className="custom-underline  mb-10"></div>
          <div className="list-of-courses w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {getAllCoursesData?.map((eachCourse) => {
              const {
                id,
                name,
                instructor,
                description,
                enrollmentStatus,
                thumbnail,
                duration,
                schedule,
                location,
                prerequisites,
                syllabus,
              } = eachCourse;
              return (
                <article
                  className="border border-solid border-gray-300 shadow-xl rounded-md"
                  key={id}
                  onClick={() => navigate(`/coursedetails/${id}`)}
                >
                  <div className="image-container rounded-md">
                    <img
                      src={thumbnail}
                      alt={thumbnail}
                      className="rounded-md"
                    />
                  </div>
                  <div className="course-details px-6 py-4">
                    <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Name:</h3>
                      <span className="text-base">{name} </span>
                    </div>
                    <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Instructor:</h3>
                      <span className="text-base">{instructor}</span>
                    </div>
                    {/* <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Description:</h3>
                      <span className="text-base">{description}</span>
                    </div> */}
                    {/* <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Enrollmet Status:</h3>
                      <span className="text-base">{enrollmentStatus}</span>
                    </div> */}
                    <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Duration:</h3>
                      <span className="text-base">{duration} </span>
                    </div>
                    {/* <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Shedule:</h3>
                      <span className="text-base">{schedule}</span>
                    </div> */}
                    <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Location:</h3>
                      <span className="text-base">{location}</span>
                    </div>
                    {/* <div className="text flex items-center gap-3">
                      <h3 className="text-xl font-bold">Prerequisites:</h3>
                      <span className="text-base">{prerequisites} </span>
                    </div> */}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
