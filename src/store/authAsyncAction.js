import axios from "axios";

export const SingUpAction = (values, Navigate) => {
  return async (dispatch) => {
    axios
      .post("https://hiring-test.a2dweb.com/create-user", values)
      .then((response) => {
        console.log(response.data);
        Navigate("/confirm");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };
};

export const LoginAction = (values, Navigate) => {
  return async (dispatch) => {
    axios
      .post("https://hiring-test.a2dweb.com/login", values)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.msg);
      });
  };
};

export const deleteToken = (Navigate) => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
};
