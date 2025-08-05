import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./stylecomponent.css";
import AllTask from "./all-task";
import AddTask from "./addtask";
import { useState } from "react";
import { useEffect } from "react";
import EditeTask from "./editeTask";
import { todoContext } from "./context/todocontext";
import DelletTask from "./delettask";

export default function TodoList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("allTaskTodo"))
  );
  const [idTasktoDellet, setIdTasktoDellet] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [stylex, setStylex] = useState("#5f9ea0");
  const [stylec, setStylec] = useState("white");
  const [stylen, setStylen] = useState("white");
  const [mode, setMode] = useState("all");
  const [aresure, setAresure] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("allTaskTodo"));
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks([  {
    id:1,
    title: "تنظيم الملفات على الحاسوب",
    description: "ترتيب المستندات والصور والمجلدات",
    iscompleted: false,
  }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allTaskTodo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div id="Todo-List">
      <todoContext.Provider
        value={[
          tasks,
          mode,
          setTaskToEdit,
          setTasks,
          taskToEdit,
          aresure,
          setAresure,
          idTasktoDellet,
          setIdTasktoDellet,
        ]}
      >
        <Container maxWidth="sm"  sx={{ position: "fixed" }}>
          <Card
            sx={{
              minWidth: "305px",
              height: "98vh",
              borderRadius: "20px",
              m: "10px 0px 0px 0px",
            }}
           >
            <div className="Nav-Bar"  onClick={()=> setAresure(false)} style={{ height: "112px" }}>
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
            <div
              className="Tasks"
              style={{
                height: "66vh",
                overflow: "auto",
                scrollbarWidth: "none",
              }}
            >
              <AllTask />
            </div>
            <div className="EditeTask">{taskToEdit && <EditeTask />}
            </div>{" "}
           
            <div className="AddTask"  onClick={()=> setAresure(false)}
              style={{
                position: "absolute",
                
                height: "120px",
                bottom:"0px",
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
