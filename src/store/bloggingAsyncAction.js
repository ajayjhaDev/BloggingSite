import config from "../config";
import axios from "axios";

import { bloggingActions } from "./blogging-slice";

export const getData = () => {
  return async (dispatch) => {
    axios
      .get(config.URL)
      .then((res) => {
        dispatch(bloggingActions.getAllData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddData = (data) => {
  return async (dispatch) => {
    axios
      .post(`${config.URL}/add`, data)
      .then((res) => {
        console.log(res.data);
        dispatch(bloggingActions.IsAdded());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const DeleteData = (id) => {
  return async (dispatch) => {
    axios
      .delete(`${config.URL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(bloggingActions.IsDeleted());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSingleData = (id) => {
  return async (dispatch) => {
    axios
      .get(`${config.URL}/single/${id}`)
      .then((res) => {
        dispatch(bloggingActions.getSingleData(res.data));

        dispatch(bloggingActions.changeShow());

        dispatch(bloggingActions.EditMode());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const EditData = (id, data) => {
  return async (dispatch) => {
    axios
      .put(`${config.URL}/edit/${id}`, data)
      .then((res) => {
        console.log(res.data);
        dispatch(bloggingActions.IsEdited());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
