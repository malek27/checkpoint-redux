import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { check, deleteTask } from "../../JS/Action/TaskAction";
import EditTask from "../EditTask";
import "./ListTask.css";
function ListTask({ all }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  

  return all
    ? tasks.map((el) => (
        <ListGroup>
          <ListGroup.Item style={{ display: "flex", alignItems: "flex-end" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(check(el.id))}
              >
                {el.done ? "done" : "undone"}
              </Button>
              <EditTask task={el} />
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(el.id))}
              >
                Delete
              </Button>
              <h3 className={el.done ? "done" : null} style={{ margin: "Opx" }}>
                {el.text}
              </h3>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))
    : tasks.map((el) =>
        el.done ? (
          <ListGroup>
            <ListGroup.Item style={{ display: "flex", alignItems: "flex-end" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-evently",
                  width: "30%",
                }}
              >
                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(check(el.id))}
                >
                  {el.done ? "done" : "undone"}
                </Button>
                <EditTask task={el} />
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteTask(el.id))}
                >
                  Delete
                </Button>
                <h3
                  className={el.done ? "done" : null}
                  style={{ margin: "Opx" }}
                >
                  {el.text}
                </h3>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ) : null
      );
}

export default ListTask;
