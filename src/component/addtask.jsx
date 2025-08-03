import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./stylecomponent.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export default function AddTask({ addTasks }) {
  const [title, setTitle] = useState("");
  function addTask() {
    addTasks(title);
    setTitle("");
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "95%", m: "15px 10px 10px 20px "  }}
    >
      <Grid size={9}>
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
      <Grid size={3}>
        <Button
          onClick={() => { if (title) { addTask(); }}}
          sx={{ width: "100%", height: "70%", fontSize: "30px" }}
          variant="contained"
        >
          إضافة
        </Button>
      </Grid>
    </Grid>
  );
}
