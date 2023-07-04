import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },

  // Bu fonksiyon ile addCourse işi bittiğinde bazı işlemleri yapmamızı sağlamaktadır.
  // Burada formSlice state değerleri form submit edildikten ve addCourse çalıştıktan sonra güncellenmesini sağladırk
  // Dikkat: Bu fonksiyon burada olmalı çünkü 1. dereceden etkilenecek kodlar burada bulunmaktadır.
  // Ayrıca addCourse buraya imort edilmiştir.
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeDescription, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
