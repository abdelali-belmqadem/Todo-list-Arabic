import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./stylecomponent.css";
import TodoTask from "./todo-task";
import AddTask from "./addtask";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";
import EditeTask from "./editeTask";

export default function TodoList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("allTaskTodo"))
  );
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("allTaskTodo"));
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allTaskTodo", JSON.stringify(tasks));
  }, [tasks]);

  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState("all");
    const [taskToEdit, setTaskToEdit] = useState(null);
  const [stylex, setStylex] = useState("#5f9ea0");
  const [stylec, setStylec] = useState("white");
  const [stylen, setStylen] = useState("white");


  useEffect(() => {
    let filteredTasks = [];
    if (mode === "completed") {
      filteredTasks = tasks.filter((t) => t.iscompleted);
    } else if (mode === "notcompleted") {
      filteredTasks = tasks.filter((t) => !t.iscompleted);
    } else{
      filteredTasks = tasks;
    }

    const todotaskx = [...filteredTasks]
      .reverse()
      .map((T) => (
        <TodoTask
          key={T.id}
          taskp={T}
          shoeditc={shoedit}
          deleteTaskx={deleteTask}
          isCompletedx={isCompleted}
        />
      ));
    setTodos(todotaskx);
  }, [mode, tasks]);

  function addTasks(titleTask) {
    setTasks([
      ...tasks,
      { id: uuidv4(), title: titleTask, description: "", iscompleted: false },
    ]);
  }

  function isCompleted(idx) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === idx) {
        t.iscompleted = !t.iscompleted
      }
      return t; 
    });
    setTasks(updatedTasks);
  }


  function edaitTask(upTask) {
    setTaskToEdit(null);
    const newupTasks = [...tasks];
    const newupTask = newupTasks.map((UT) => {
      if (UT.id === upTask.id) {
        return upTask;
      } else {
        return UT;
      }
    });
    // console.log(newupTask)
    setTasks(newupTask);
  }

function shoedit(task) {
  setTaskToEdit(task);
}

  function deleteTask(id) {
    const allTask = [...tasks];
    const newTask = allTask.filter((t) => {
      return t.id !== id;
    });
    setTasks(newTask);
  }

  return (
    <div id="todolist">
      <Container maxWidth="sm" sx={{ position: "fixed" }}>
        <Card sx={{ minWidth: 275, height: "96vh" , borderRadius:"10px", m:"5px 0 0 0" }}>
          <div style={{ height: "22vh" }}>
            <Typography
              gutterBottom
              variant="h3"
              sx={{ m:" 10px 0px 0px 0px",color: "text.secondary", textAlign: "center" }}
            >
              قائمة المهام
            </Typography>
            <Divider />

            <ButtonGroup
              variant="outlined"
              aria-label="Basic button group"
              sx={{
                display: "flex",
                justifyContent: "center",
                direction: "ltr",
                m: 1,
              }}
            >
              <Button
                sx={{
                  backgroundColor: stylec,
                  fontSize: "20px",
                  color: "black",
                  ml: 2,
                }}
                onClick={() => {
                  setMode("completed");
                  setStylex("white");
                  setStylec("#5f9ea0");
                  setStylen("white");
                }}
              >
                {" "}
                منجزة
              </Button>
              <Button
                sx={{
                  backgroundColor: stylen,
                  fontSize: "20px",
                  color: "black",
                  ml: 2,
                }}
                onClick={() => {
                  setMode("notcompleted");
                  setStylex("white");
                  setStylec("white");
                  setStylen("#5f9ea0");
                }}
              >
                غير منجزة
              </Button>
              <Button
                sx={{
                  backgroundColor: stylex,
                  fontSize: "20px",
                  color: "black",
                  ml: 2,
                }}
                onClick={() => {
                  setMode("all");
                  setStylex("#5f9ea0");
                  setStylec("white");
                  setStylen("white");
                }}
              >
                الكل
              </Button>
            </ButtonGroup>
          </div>
          {/* ============== show tasks  ================ */}

          <div
            style={{ height: "58vh", overflow: "auto", scrollbarWidth: "none" }}
          >
            {todos}
          </div>
          {/* ============== tasks to edite ================ */}
        
          <div><div>{taskToEdit && <EditeTask tasked={taskToEdit} edaitTaskc={edaitTask} />}</div>  </div>

          {/* ============== add tasks ================ */}

          <div
            style={{
              position: "absolute",
              height: "14vh",
              width: "92%",
              backgroundColor: "#fff",
              borderRadius:"0px 0 20px 20px" ,
              zIndex: 2,
            }}
          >
            <AddTask addTasks={addTasks} />
          </div>
        </Card>
      </Container>
    </div>
  );
}
