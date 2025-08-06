import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./stylecomponent.css";
import AllTask from "./all-task";
import AddTask from "./addtask";
import { useState } from "react";
import { useEffect } from "react";
import EditeTask from "./editeTask";
import { todoContext } from "./context/todocontext";
import DelletTask from "./delettask";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [idTasktoDellet, setIdTasktoDellet] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [mode, setMode] = useState("all");
  const [aresure, setAresure] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5f9ea0",
      },
    },
  });

  useEffect(() => {
    const allTaskTodo = JSON.parse(localStorage.getItem("allTaskTodo"));
    setTasks(() => {
      if (allTaskTodo) {
        return allTaskTodo;
      } else {
        return [];
      }
    });
  }, []);

  function handleChange(ev) {
    setMode(ev);
  }
  return (
    <div id="Todo-List">
      <todoContext.Provider
        value={{
          tasks,
          mode,
          setTaskToEdit,
          setTasks,
          taskToEdit,
          aresure,
          setAresure,
          idTasktoDellet,
          setIdTasktoDellet,
        }}
      >
        <Container maxWidth="sm" sx={{ position: "fixed" }}>
          <Card
            sx={{
              minWidth: "305px",
              height: "650px",
              borderRadius: "20px",
              m: "10px 0px 0px 0px",
            }}
          >
            <div
              className="Nav-Bar"
              onClick={() => setAresure(false)}
              style={{ height: "120px" }}
            >
              <Typography
                gutterBottom
                variant="h3"
                sx={{
                  m: " 20px 0px 0px 0px",
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                قائمة المهام
              </Typography>
              <Divider />
              <ThemeProvider theme={theme}>
                <ToggleButtonGroup
                  color="primary"
                  value={mode}
                  exclusive
                  onChange={(e) => handleChange(e.target.value)}
                  aria-label="Platform"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    direction: "ltr",
                    m: 1,
                  }}
                >
                  <ToggleButton value="completed"> منجزة</ToggleButton>
                  <ToggleButton value="notcompleted">غير منجزة</ToggleButton>
                  <ToggleButton value="all"> الكل</ToggleButton>
                </ToggleButtonGroup>
              </ThemeProvider>
            </div>
            <div  className="Tasks"
              style={{
                height: "400px",
                overflow: "auto",
                scrollbarWidth: "none",
              }}
            >
              <AllTask />
            </div>
            <div className="EditeTask">{taskToEdit && <EditeTask />}</div>{" "}
            <div className="AddTask"
              onClick={() => setAresure(false)}
              style={{
                position: "absolute",

                height: "120px",
                bottom: "0px",
                width: "92%",
                backgroundColor: "#ffffffff",
                borderRadius: "0px 0 20px 20px",
                zIndex: 2,
              }}
            >
              <AddTask />
            </div>
            <div className="DelletTask">{aresure && <DelletTask />}</div>
          </Card>
        </Container>
      </todoContext.Provider>
    </div>
  );
}
