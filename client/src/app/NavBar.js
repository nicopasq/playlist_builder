import '@/app/globals.css'
import { Button, Paper } from "@mui/material";

function NavBar(){
    return(
            <Paper className='navBar' elevation={3}>
                <Button variant="contained">Profile</Button>
                <Button variant="contained">My Projects</Button>
                <Button variant="contained">Login | Sign Up</Button>
            </Paper>
    )
}

export default NavBar;