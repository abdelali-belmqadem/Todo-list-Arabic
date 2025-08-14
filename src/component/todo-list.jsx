import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./stylecomponent.css";
import AllTask from "./all-task";
import AddTask from "./addtask";
import EditeTask from "./editeTask";
// import { saveToLocalStorage } from "../context/todocontext";
import DelletTask from "./delettask";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastProvider } from "../context/toastcontext";
import { useTodoContext } from "../context/todocontext";
import { useEffect } from "react";

export default function TodoList() {

const {setAresure , taskToEdit , setTasks , aresure , mode , handleChange} = useTodoContext();

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

  return (



    <div id="Todo-List">
<ToastProvider>
     

        <Container maxWidth="sm" sx={{ position: "fixed" }}>
          <Card
            sx={{
              minWidth: "305px",
              height: "98vh",
              borderRadius: "20px",
              m: "10px 0px 0px 0px",
            }}
          >
            <div
              className="Nav-Bar"
              onClick={() => setAresure(false)}
              style={{  maxHeight: "120px" }}
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
                 height: "calc(100vh - 245px)",
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
                maxHeight:"120px",
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
         
      
</ToastProvider>
    </div>
  );
}
