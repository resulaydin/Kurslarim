import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalCost = useSelector(
    ({ fromStore, coursesStore: { data, searchTerm } }) =>
      data
        .filter((filteredCourseItem) => {
          return filteredCourseItem.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
        .reduce((acc, courseItem) => acc + courseItem.cost, 0)
  );

  return (
    <div style={{ textAlign: "right", fontSize: "24px" }}>
      <span style={{ display: "inline-block" }}>Toplam Tutar: </span>
      <span style={{ display: "inline-block", marginLeft: "10px" }}>
        {totalCost} TL
      </span>
    </div>
  );
};

export default CourseValue;
