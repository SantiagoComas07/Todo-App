import { Box, Button, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';


type OpenProps ={
    onClose: () => void;
}


export const TaskForm = ({onClose}:OpenProps) =>{

const currencies = [
  {
    value: 'pending',
    label: 'pending',
  },
  {
    value: 'completed',
    label: 'Done',
  }
];



    return(
        <>

        <Box 
        component="form" 
        className=" flex flex-col p-5 py-3 justify-around w-90 h-100 rounded-xs" 
        sx={{backgroundColor:"primary.light"}}
        
        >
            <Box component="div"  className="w-full flex justify-start">
            <IconButton onClick={onClose}>
                <ClearIcon  />
           </IconButton>
            </Box>
            
            <Typography variant="overline" sx={{color:"secondary.dark"}} className="text-center">
                Form
            </Typography>
            <TextField label="description" variant="outlined" placeholder="Title" /> 
            <TextField
                id="outlined-textarea"
                variant="outlined"
                label="Description"
                placeholder="Description"
                multiline
                />

                 <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <Button variant="contained" sx={{backgroundColor:"secondary.dark", color: "white"}}>Send</Button>
        </Box>
        </>
    )
}