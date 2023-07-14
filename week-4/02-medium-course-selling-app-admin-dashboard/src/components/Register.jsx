import React from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { margin } from "@mui/system";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");



    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }


    return <div>
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh"
    
    
    }}>
        <Card variant="outlined" style={{
            width:"500px",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}>
        <h3>Welcome our course site.Please register From here</h3>
        <div style={{
            width:"300px",
            height:"50px",
            margin:"10px"
        }}>
            <TextField 
            fullWidth={true}
             id="outlined-basic" 
             label="Email" 
             variant="outlined" 
             onClick={handleEmailChange}
             />

        </div>
        <div style={{
            width:"300px",
            height:"50px",
            margin:"10px"
        }}>
        <TextField 
        fullWidth={true} 
        id="outlined-basic" 
        label="password" 
        variant="outlined" 
        onClick={handlePasswordChange}
        />
       

        </div>
        <div style={{
            width:"300px",
            margin:"10px"
        }}>
    
        <Button variant="contained" onClick={registerAdmin}>Register</Button> 

        </div>
       
        
       
        </Card>

      
 
        </div>

    
    </div>
}

export default Register;