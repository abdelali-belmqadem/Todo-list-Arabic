import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./stylecomponent.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useContext } from "react";
import { todoContext } from "./context/todocontext";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const { tasks, setTasks } = useContext(todoContext);

  function addTasks() {
    const allTasks = [
      ...tasks,
      { id: uuidv4(), title: title, description: "", iscompleted: false },
    ];
    setTasks(allTasks);
    setTitle("");
    localStorage.setItem("allTaskTodo", JSON.stringify(allTasks));
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "92%", m: "15px 10px 10px 20px " }}
    >
      <Grid size={8}>
        <TextField
          onChange={(T) => {
            setTitle(T.target.value);
          }}
          value={title}
          sx={{
            width: "100%",
            height: "100%",
            padding: "0px",

            "& input": { fontSize: "25px" },
            "& label": {
              right: 20,
              left: "auto",
              m: -2,
              transformOrigin: "top right",
              textAlign: "right",
              fontSize: "30px",
            },
          }}
          id="standard-basic"
          label="عنوان المهمة"
          variant="standard"
        />
      </Grid>
      <Grid size={4}>
        <Button
          disabled={title.length === 0}
          onClick={() => {
            if (title) {
              addTasks();
            }
          }}
          sx={{ width: "100%", height: "80%", fontSize: "30px" }}
          variant="contained"
        >
          إضافة
        </Button>
      </Grid>
    </Grid>
  );
}
