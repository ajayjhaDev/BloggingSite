import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  DeleteData,
  getSingleData,
} from "../store/bloggingAsyncAction";

const Show = () => {
  const data = useSelector((state) => state.blogging.blogging);
  const isAdded = useSelector((state) => state.blogging.isAdd);
  const isDeleted = useSelector((state) => state.blogging.isDeleted);
  const isEdited = useSelector((state) => state.blogging.isEdited);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteData(id));
  };

  const Populated = (id) => {
    dispatch(getSingleData(id));
  };

  useEffect(() => {
    dispatch(getData());
  }, [isAdded, isDeleted, isEdited]);

  return (
    <>
      {data.map((ele) => (
        <section className="show m-5" key={ele._id}>
          <div className="text-center">
            <h4>{ele.title}</h4>

            <p>{ele.story}</p>
            <p>
              Contribute by <strong>{ele.name}</strong>
            </p>
          </div>
          <i
            className="bi bi-trash mx-4"
            onClick={() => handleDelete(ele._id)}
          ></i>
          <i
            className="bi bi-pencil-square mx-4"
            onClick={() => Populated(ele._id)}
          ></i>
        </section>
      ))}
    </>
  );
};

export default Show;
