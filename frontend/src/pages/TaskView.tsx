import { Box, Button, Modal, Typography } from "@mui/material";
import { TaskForm } from "../components/TaskForm";
import { useState, useEffect } from "react";
import TaskIcon from '@mui/icons-material/Task';
import { TaskItem, type TaskProps } from "../components/TaskItem";
import { fetchTasks, createTask as createTaskApi, deleteTask as deleteTaskApi, updateTask as updateTaskApi } from "../api/taskApi";

export const TaskView = () => {
   // useStates and UseEffects
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState<TaskProps | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle open form
  const handleOpen = () => {
    setEditingTask(null); 
    setOpen(true);
  };

   // Handle close form
  const handleClose = () => {
    setOpen(false);
    setEditingTask(null);
  };




  const onDelete = async (id: string) => {
    try {
      await deleteTaskApi(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const onEdit = (task: TaskProps) => {
    setEditingTask(task);
    setOpen(true);
  };


  return (
    <>
      <Box className="w-90 flex justify-around items-center mx-auto" sx={{backgroundColor: "secondary.light"}}>
        <Button variant="text" sx={{color:"secondary.dark"}} className="flex justify-around items-center gap-0.5" onClick={handleOpen}>
          <TaskIcon sx={{fontSize: '0.9rem'}}/> CREATE
        </Button>
        <Modal open={open} className="flex justify-center items-center">
          <TaskForm onClose={handleClose} editingTask={editingTask} onSave={loadTasks} />
        </Modal>
        <Typography variant="overline" sx={{color:"primary.dark"}}>
          Create a new Task
        </Typography>
      </Box>
      <Box>
        {loading ? (
          <Typography sx={{textAlign: 'center', marginTop: 2}}>Cargando tareas...</Typography>
        ) : (
          <TaskItem tasks={tasks} onDelete={onDelete} onEdit={onEdit} />
        )}
      </Box>
    </>
  );
};
