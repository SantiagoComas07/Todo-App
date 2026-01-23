
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material'
import {Link} from 'react-router-dom'

export const NavBar = () =>{
    return(<>

      <AppBar position="fixed" >
        <Toolbar>
          <Typography  variant="h5" component="div" sx={{ flexGrow: 1 , color: "secondary.main" }} className="font-bold">
            ToDo App
          </Typography>
          <Box className="flex gap-3">
            <Button component={Link} to="/" sx={{backgroundColor:"secondary.light"}} >Tasks</Button>
            <Button component={Link} to="/charts" sx={{backgroundColor:"secondary.light"}} >Charts</Button>
            <Button component={Link} to="/resources" sx={{backgroundColor:"secondary.light"}}>Resources</Button>
          </Box>
        </Toolbar>
      </AppBar>

    </>)
}