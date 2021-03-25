import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleNote } from "../actions";

function Note(props) {
  const dispatch = useDispatch();
  function handleClick(event) {
    dispatch(toggleNote(props.id));
  }
  return (
    <>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Detele
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Note;
