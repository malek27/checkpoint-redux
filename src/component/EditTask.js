import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { edit } from "../JS/Action/TaskAction";
import { useDispatch } from "react-redux";

function EditTask({task}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [taskUpdated, SetTaskUpdated] = useState(task.text);

  const dispatch = useDispatch();
  const updateTask = () => {
    if (taskUpdated !== "") {
      dispatch(edit({ id: task.id, text: taskUpdated ,done:task.done }));
      handleClose();
    } else {
      alert("cant updated whith empty string !");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New task</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <input
            value={taskUpdated}
            onChange={(e) => SetTaskUpdated(e.target.value)}
            
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
