import React from "react";
import Button from "react-bootstrap/Button";

import { bloggingActions } from "../store/blogging-slice";
import { useDispatch } from "react-redux";

const Publishbtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(bloggingActions.changeShow());
  };

  return (
    <div className="p-3 text-center" style={{ backgroundColor: "#373d52" }}>
      <Button variant="outline-primary" onClick={handleClick}>
        To Write your story press here
      </Button>
    </div>
  );
};

export default Publishbtn;
