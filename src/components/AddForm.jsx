import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AddData } from "../store/bloggingAsyncAction";
import { bloggingActions } from "../store/blogging-slice";
import { useDispatch } from "react-redux";

const schema = yup
  .object({
    name: yup.string().required("please fill the name"),
    title: yup.string().required("please fill the title"),
    story: yup.string().required("write your story"),
  })
  .required();

const AddForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(AddData(data));
    dispatch(bloggingActions.changeShow());

    reset();
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
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            {...register("title")}
          />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </Form.Group>

        <FloatingLabel label="Write Story">
          <Form.Control
            as="textarea"
            placeholder="write story"
            style={{ height: "200px" }}
            {...register("story")}
          />
          <p style={{ color: "red" }}>{errors.story?.message}</p>
        </FloatingLabel>

        <Button variant="primary" type="submit" className="mt-3">
          Publish
        </Button>
      </Form>
    </>
  );
};

export default AddForm;
