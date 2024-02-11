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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByInstructor, setSearchByInstructor] = useState("");
  const [filters, setFilters] = useState({
    searchTerm: "",
    instructor: "",
  });
  const [filteredCourses, setFilteredCourses] = useState([]);

  const {
    mutate: getAllCoursesFn,
    isPending: getAllCoursesLoading,
    isSuccess: getAllCoursesSuccess,
    isError: getAllCoursesError,
    error: getAllCoursesErrorMessage,
    data: getAllCoursesData,
  } = useGetCourses();

  useEffect(() => {
    // debugger;
    let newItems = getAllCoursesData;
    if (searchTerm) {
      newItems = newItems?.filter((eachCourse) =>
        eachCourse.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(newItems);
    }

    if (searchByInstructor) {
      newItems = newItems?.filter((eachCourse) =>
        eachCourse.instructor
          .toLowerCase()
          .includes(searchByInstructor.toLowerCase())
      );
    }

    setFilteredCourses(newItems);
  }, [searchTerm, searchByInstructor]);

  useEffect(() => {
    if (getAllCoursesSuccess) {
      setFilteredCourses(getAllCoursesData);
    }
  }, [getAllCoursesSuccess]);

  useEffect(() => {
    getAllCoursesFn();
  }, []);

  if (getAllCoursesLoading) {
    return (
      <div className="w-full min-h-[300px] flex justify-center items-center">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home container-center wrapper page flex flex-col gap-10">
        <div>
          <div className="top-container">
            <h1 className="custom-title">Courses</h1>
            <div className="custom-underline  mb-10"></div>
          </div>
          <div className="form-container flex gap-4 justify-start w-full mb-10">
            <div className="course-search  ">
              <input
                type="text"
                className="search  bg-slate-100 px-4 py-2 text-base rounded   "
                name="search"
                id="search"
                placeholder="search by course names"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="instructor-search">
              <input
                type="text"
                className="instructor  bg-slate-100 px-4 py-2 text-base rounded"
                name="search"
                id="search"
                placeholder="serach by instructor names"
                value={searchByInstructor}
                onChange={(e) => setSearchByInstructor(e.target.value)}
                t
              />
            </div>
          </div>
          <div className="list-of-courses w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {filteredCourses?.map((eachCourse) => {
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
