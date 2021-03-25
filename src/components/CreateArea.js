import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../actions";

const CreateArea = () => {
  const dispatch = useDispatch();
  const [Note, setNote] = useState({
    title: "",
    body: "",
  });

  function handleCLick(event) {
    return dispatch(addNote(Note));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Container className="pt-3">
        <Form.Group>
          <Form.Control
            autoComplete="off"
            value={Note.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter Title"
          />
          <Form.Control
            as="textarea"
            rows={3}
            autoComplete="off"
            value={Note.body}
            name="body"
            onChange={handleChange}
            type="text"
            placeholder="Take a Note"
          />
          <Button
            onClick={handleCLick}
            value="Add"
            variant="primary"
            type="Add"
            name="Add"
          >
            Add
          </Button>
        </Form.Group>
        {/* <form className="mx-auto">
          <input
            type="text"
            value={Note.title}
            onChange={handleChange}
            name="title"
          />
          <input
            type="text"
            value={Note.body}
            onChange={handleChange}
            name="body"
          />
          <input type="button" value="Add" onClick={handleCLick} />
        </form> */}
      </Container>
    </>
  );
};

export default CreateArea;
