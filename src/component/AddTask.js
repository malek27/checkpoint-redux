import React, { useState } from "react";
import { Button, Card, Form, FormGroup, InputGroup,FormControl } from "react-bootstrap";
import { add } from "../JS/Action/TaskAction";
import { useDispatch } from "react-redux";
import "./AddTask.css"

function AddTask({handleAll}) {
  const [text, setText] = useState("");
  const [all, setAll] = useState(true);

  const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    if (text !== "") {
      dispatch(add({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("write something !");
    }
  };
  return (
    <div>
      <Card className="card">
        <Card.Header ><h1>To-Do-App</h1></Card.Header>
        <Card.Body>
          <Form onSubmit={addTask}>
            <FormGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="new task"
                  aria-label="new task"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <InputGroup.Append>
                  <Button variant="primary" onClick={addTask}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              <Button
                variant="primary"
                onClick={() => {
                  setAll(!all);
                  handleAll(all);
                }}
              >
                {all ? "all" : "done"}
              </Button>
            </FormGroup>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddTask;
