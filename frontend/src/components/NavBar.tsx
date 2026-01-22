
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material'


export const NavBar = () =>{
    return(<>

      <AppBar position="fixed" >
        <Toolbar>
          <Typography  variant="h5" component="div" sx={{ flexGrow: 1 , color: "secondary.main" }} className="font-bold">
            ToDo App
          </Typography>
          <Box className="flex gap-3">
            <Button sx={{backgroundColor:"secondary.main"}} >Tasks</Button>
            <Button sx={{backgroundColor:"secondary.main"}} >Charts</Button>
            <Button sx={{backgroundColor:"secondary.main"}}>Resources</Button>
          </Box>
        </Toolbar>
      </AppBar>

    </>)
}