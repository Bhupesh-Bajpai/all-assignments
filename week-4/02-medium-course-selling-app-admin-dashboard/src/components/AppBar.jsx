import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AppBar(){
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            height:"5%"
        }}>
            <div style={{
                marginTop:"4px"
            }}>
            <Typography>Course Launcher</Typography>
            </div>
            <div style={{
                marginTop:"4px"
            }}>
            <Button  sx={{ margin: '0 10px 0 0' }} size="small" component={Link} to="/Register" variant="contained" color="primary">
                Register
</Button>
            <Button component={Link} size="small" to="/Login" variant="contained" color="primary">
  Login
</Button>
            </div>
            
        </div>
    )
}

export default AppBar;