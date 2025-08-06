import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { todoContext } from "./context/todocontext";

export default function DelletTask() {
  const { tasks, setTasks, setAresure, idTasktoDellet, setIdTasktoDellet } =
    useContext(todoContext);

  function deleteTaskconfirem(id) {
    const allTask = [...tasks];
    const newTask = allTask.filter((t) => {
      return t.id !== id;
    });
    const allTasks = newTask;
    setTasks(allTasks);
    setAresure(false);
    setIdTasktoDellet(null);
    localStorage.setItem("allTaskTodo", JSON.stringify(allTasks));
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        top: "250px",
        position: "absolute",
        zIndex: 26,
        width: "80%",
        m: "0px 15px 0px 15px ",
        padding: "5px 10px 0px 5px",
        borderRadius: "20px",
        background: "#e2e2e2f0",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 33, padding: "0px" }}
        >
          هل أنت متأكد أنك تريد حذف هذه المهمة ؟
        </Typography>
        <Button
          onClick={() => {
            setAresure(false);
          }}
          sx={{
            color: "#1565c0",
            border: "2px solid",
            borderRadius: "20px",
            fontSize: 30,
            padding: "0px 30px 0px 30px",
            m: "10px 10px 10px 0px",
            ":hover": { backgroundColor: "#1565c02b" },
          }}
        >
          إلغاء
        </Button>
        <Button
          onClick={() => {
            deleteTaskconfirem(idTasktoDellet);
          }}
          sx={{
            color: "red",
            border: "2px solid",
            borderRadius: "20px",
            fontSize: 30,
            padding: "0px 30px 0px 30px",
            m: "10px 10px 10px 10px",
            ":hover": { backgroundColor: "#c633332b" },
          }}
        >
          حدف{" "}
        </Button>
      </CardContent>
    </Card>
  );
}
