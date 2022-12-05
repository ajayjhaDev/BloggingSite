import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { EditData } from "../store/bloggingAsyncAction";

import { bloggingActions } from "../store/blogging-slice";

const schema = yup.object({
  name: yup.string(),
  title: yup.string(),
  story: yup.string(),
});

const EditForm = () => {
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.blogging.singledata);

  useEffect(() => {
    setValue("name", singleData.name);
    setValue("title", singleData.title);
    setValue("story", singleData.story);
  }, [singleData]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(EditData(singleData._id, data));
    dispatch(bloggingActions.EditMode());
    dispatch(bloggingActions.changeShow());
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your name"
            {...register("name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            {...register("title")}
          />
        </Form.Group>

        <FloatingLabel label="Write Story">
          <Form.Control
            as="textarea"
            placeholder="write story"
            style={{ height: "200px" }}
            {...register("story")}
          />
        </FloatingLabel>

        <Button variant="primary" type="submit" className="mt-3">
          Edit
        </Button>
      </Form>
    </>
  );
};

export default EditForm;
