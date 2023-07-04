import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice";

const CourseSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.coursesStore.searchTerm;
  });

  return (
    <div className="panel" style={{ padding: "5px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h1>Kurslarım</h1>
        <div className="field">
          <label
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>Ara: </span>
            <input
              type="text"
              className="input"
              style={{
                marginLeft: "5px",
              }}
              onChange={(event) => {
                dispatch(changeSearchTerm(event.target.value));
              }}
              value={searchTerm}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
