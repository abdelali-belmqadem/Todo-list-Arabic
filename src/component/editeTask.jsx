import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./stylecomponent.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useContext } from "react";
import { todoContext } from "./context/todocontext";
import { saveToLocalStorage } from "./todo-list";
import { useToast } from "./context/toastcontext";


function EditeTask() {

  
  const { tasks, setTaskToEdit, setTasks, taskToEdit } = useContext(todoContext);
  const {showToast} = useToast();
  const [updetTask, setUpdetTask] = useState(taskToEdit);

  function edaitTask() {
    const allTask = [...tasks];
    const newupTask = allTask.map((UT) => {
      if (UT.id === updetTask.id) {
        return updetTask;
      }
      return UT;
       
    });
    const allTasks = newupTask;
    setTasks(allTasks);
    setTaskToEdit(null);
    saveToLocalStorage(allTasks);
    showToast("تم التعديل بنجاح")
  
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          top: "200px",
          position: "absolute",
          zIndex: 22,
          width: "92%",
          padding: "20px 20px 14px 20px",
          borderRadius: "20px",
          background: "#e2e2e2f0",
        }}
      >
        <Grid size={12}>
          <TextField
            value={updetTask.title}
            type="text"
            onChange={(T) => {
              setUpdetTask({ ...updetTask, title: T.target.value });
            }}
            sx={{
              width: "100%",
              height: "100%",
              padding: "0px",

              "& input": { fontSize: "25px", color: "#000000ff" },
              "& label": {
                color: "#555151ff",
                right: 20,
                left: "auto",
                m: "-10px -15px 0px 0px",
                transformOrigin: "top right",
                textAlign: "right",
                fontSize: "30px",
                ":focus": { color: "#555151ff", bgcolor: "#972c2cff" },
              },
            }}
            id="standard-basic"
            label="عنوان المهمة"
            variant="standard"
          />{" "}
        </Grid>{" "}
        <Grid size={12}>
          <TextField
            value={updetTask.description}
            type="text"
            onChange={(T) => {
              setUpdetTask({ ...updetTask, description: T.target.value });
            }}
            sx={{
              width: "100%",
              height: "100%",
              padding: "0px",

              "& input": { fontSize: "20px", color: "#000000ff" },
              "& label": {
                color: "#555151ff",
                right: 20,
                left: "auto",
                m: "-1px -15px 0px 0px",
                transformOrigin: "top right",
                textAlign: "right",
                fontSize: "20px",
              },
            }}
            id="standard-basic"
            label="وصف المهمة"
            variant="standard"
          />
        </Grid>
        <Button
          sx={{
            width: "25%",
            height: "100%",
            padding: "0px",
            fontSize: "24px",
            margin: "auto",
          }}
          onClick={() => {
            if (updetTask.title) {
              edaitTask();
            }
          }}
          variant="contained"
        >
          تحديث
        </Button>
      </Grid>
    </div>
  );
}

export default EditeTask;
