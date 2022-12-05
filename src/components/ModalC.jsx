import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

import { bloggingActions } from "../store/blogging-slice";

const ModalC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.blogging.show);

  const isEditMode = useSelector((state) => state.blogging.isEditMode);

  const handleClose = () => {
    dispatch(bloggingActions.changeShow());

    if (isEditMode) {
      dispatch(bloggingActions.EditMode());
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write Things , Share with World !</Modal.Title>
        </Modal.Header>
        <Modal.Body>{isEditMode ? <EditForm /> : <AddForm />}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalC;
