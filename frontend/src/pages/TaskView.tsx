import { Box, Button, Modal, Typography } from "@mui/material";
import { TaskForm } from "../components/TaskForm";
import { useState } from "react";
import TaskIcon from '@mui/icons-material/Task';
import { TaskItem } from "../components/TaskItem";

export const TaskView = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className="w-90 flex justify-around items-center mx-auto" sx={{backgroundColor: "secondary.light"}}>
        <Button variant="text" sx={{color:"secondary.dark"}} className="flex justify-around items-center gap-0.5" onClick={handleOpen}>
          <TaskIcon sx={{fontSize: '0.9rem'}}/> CREATE
        </Button>
        <Modal open={open} className="flex justify-center items-center">
          <TaskForm onClose={handleClose} />
        </Modal>
        <Typography variant="overline" sx={{color:"primary.dark"}}>
          Create a new Task
        </Typography>
      </Box>
      <Box>
        <TaskItem />
      </Box>
    </>
  );
};
