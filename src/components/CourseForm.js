import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/formSlice";

import { addCourse } from "../store/slices/courseSlice";

const CourseForm = () => {
  const dispatch = useDispatch();
  // Dikkat burası state' nin en son güncellendiği değerlerini içeriri.
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.formStore.name,
      description: state.formStore.description,
      cost: state.formStore.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };

  return (
    <div className="courseForm panel">
      <h4 className="subTitle is-3">Kurs ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeName(event.target.value));
              }}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeDescription(event.target.value));
              }}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              type="number"
              onChange={(event) => {
                dispatch(changeCost(Number(event.target.value)));
              }}
              value={cost}
            />
          </div>
        </div>
        <div className="field btn-save">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
