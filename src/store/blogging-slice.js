import { createSlice } from "@reduxjs/toolkit";

const bloggingSlice = createSlice({
  name: "blogging",
  initialState: {
    blogging: [],
    show: false,
    isAdd: false,
    isDeleted: false,
    singledata: {},
    isEditMode: false,
    isEdited: false,
  },
  reducers: {
    getAllData(state, actions) {
      state.blogging = actions.payload;
    },
    changeShow(state) {
      state.show = !state.show;
    },
    IsAdded(state) {
      state.isAdd = !state.isAdd;
    },
    IsDeleted(state) {
      state.isDeleted = !state.isDeleted;
    },
    getSingleData(state, actions) {
      state.singledata = actions.payload;
    },
    EditMode(state) {
      state.isEditMode = !state.isEditMode;
    },
    IsEdited(state) {
      state.isEdited = !state.isEdited;
    },
  },
});

export const bloggingActions = bloggingSlice.actions;

export default bloggingSlice;
