import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import "./stylecomponent.css";
import ClearIcon from "@mui/icons-material/Clear";
export default function TodoTask({
  taskp,
  isCompletedx,
  deleteTaskx,
  shoeditc,
  noCompletedx,
}) {


  return (
    <Card
      sx={{
        transition: "all 0.5s",
        display: "flex",
        paddingLeft: "10px",
        m: "15px 5px 15px 5px",
        justifyContent: "center",
        alignContent: "center",
        bgcolor: "cadetblue",
        ":hover": {
          boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
          padding: "15px 0px 15px 10px",
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h6" fontFamily={"Aarab"}>
            {taskp.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {taskp.description}
          </Typography>
        </CardContent>
      </Box>
      <Stack direction="row">
        {/* ======================== */}
        {!taskp.iscompleted ? (
          <CheckIcon
            onClick={() => isCompletedx(taskp.id)}
            color="success"
            sx={{
              transition: "all 0.5s",
              alignSelf: "center",
              m: "2px",
              border: "2px solid green",
              height: "30px",
              width: "30px",
              padding: "4px",
              borderRadius: "50%",
              ":hover": {
                boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                background: "rgba(47, 169, 114, 1)",
                color: "white",
              },
            }}
            // orrrrrrrrrrrrrrrrrrr
          />
        ) : (
          <ClearIcon
            onClick={() => isCompletedx(taskp.id)}
            sx={{
              fontSize: "51px",
              transition: "all 0.5s",
              color: "white",
              alignSelf: "center",
              m: "2px",
              border: "2px solid green",
              height: "20px",
              width: "20px",
              padding: "9px",
              borderRadius: "50%",
              background: "green",
              ":hover": {
                boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                background: "rgba(255, 5, 5, 0.54)",
                color: "white",
              },
            }}
          />
        )}
        {/* ////======================== */}
        <CreateIcon
           onClick={() => shoeditc(taskp)}
          color="info"
          sx={{
            transition: "all 0.5s",
            alignSelf: "center",
            m: "2px",
            border: "2px solid #0288d1",
            height: "30px",
            width: "30px",
            padding: "4px",
            borderRadius: "50%",
            ":hover": {
              boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
              background: "#0288d1",
              color: "white",
            },
          }}
        />
        <DeleteIcon
          onClick={() => deleteTaskx(taskp.id)}
          color="error"
          sx={{
            transition: "all 0.5s",
            alignSelf: "center",
            m: "2px",
            border: "2px solid red",
            height: "30px",
            width: "30px",
            padding: "4px",
            borderRadius: "50%",
            ":hover": {
              boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
              background: "red",
              color: "white",
            },
          }}
        />
      </Stack>
    </Card>
  );
}
