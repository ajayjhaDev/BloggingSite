import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { deleteToken } from "../store/authAsyncAction";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const handleLogout = () => {
    dispatch(deleteToken(Navigate));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top me-4"
            />
            Blogging Site
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img
                src={"https://cdn-icons-png.flaticon.com/512/4436/4436954.png"}
                alt={"logout"}
                height={"30"}
                width={"30"}
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
