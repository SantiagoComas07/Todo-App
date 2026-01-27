import { Box,  IconButton, Typography } from "@mui/material";

type StatusType = "pending" | "completed"

// TaskProps -- type the Task
export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: StatusType;
}


// TaskItemProps -- actions
interface TaskItemProps {
  tasks: TaskProps[];
  onEdit: (task: TaskProps) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ tasks, onEdit, onDelete }: TaskItemProps) => {
  if (tasks.length === 0) {
    return (
      <Box
        component="div"
        sx={{ backgroundColor: "primary.light" }}
        className="w-55 px-3 py-2 mt-10 text-center mx-auto"
      >
        <Typography sx={{ color: "secondary.dark" }}>
          No hay tareas disponibles
        </Typography>
      </Box>
    );
  }
  return (
    <>
     {/* Dynamic tasks */}
      <Box component="section" className="mt-10 flex flex-col justify-center items-center gap-4 ">
        {tasks.map((task) => (
          <Box
            sx={{ backgroundColor: "primary.light" }}
            className="w-[65%] h-20 my-1 py-2  p-3 flex items-center justify-between  "
          >
            <Box component="div" className= {`w-7 h-7  rounded-full  ${task.status === 'pending'? 'bg-red-400' : 'bg-green-300' }`}>
                
            </Box>
            <Box
              component="div"
              key={task.id}
              sx={{ color: "primary.dark" }}
              className=" w-full  px-4 rounded-xs flex items-center  gap-3 "
            >
              <Typography className="w-45 ">{task.title}</Typography>
              <Typography className="truncate w-[70%]">
                {task.description}
              </Typography>
              <Box className=" flex items-center gap-3">
                <button 
                  onClick={() => onEdit(task)}
                  className="w-17 h-9 bg-amber-500 text-white font-semibold px-4 py-0.5 rounded-xs hover:bg-amber-600  hover:cursor-pointer uppercase">
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(task.id)}
                  className=" w-22 h-9 bg-red-600 text-white font-semibold px-4 py-0.5 rounded-xs hover:bg-red-700 hover:cursor-pointer uppercase">
                  Delete
                </button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
