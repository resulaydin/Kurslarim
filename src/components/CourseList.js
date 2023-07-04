import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  // const courses = useSelector((state) => {
  //   return state.coursesStore.data;
  // });

  const courses = useSelector(
    ({ formStore, coursesStore: { searchTerm, data } }) => {
      const filteredCourses = data.filter((filteredCourseItem) => {
        return filteredCourseItem.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      return {
        papucumunCoursesi: filteredCourses,
      };
    }
  );

  const renderedCourses = courses.papucumunCoursesi.map((courseItem) => {
    return (
      <div key={courseItem.id} className="panel">
        <h1>{courseItem.name}</h1>
        <p>{courseItem.description}</p>
        <p>{courseItem.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(courseItem.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });

  return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
