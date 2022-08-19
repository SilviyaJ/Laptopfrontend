import { AccountCircle } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from "react";
import { called, callLogin, paste, sample, simple } from "./Contact";
import { Home } from "./Home";

export const Login=()=>{

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onCollect=(sell)=>{
        const{name,value}=sell.target
        setUser((gell)=>{
                return{
                    ...gell,
                    [name]:value
                }
        })

    }

    const onLogin=async()=>{
        alert(JSON.stringify(user)+"trying to login")
        // await sample()
        // await simple()
        // await paste()
        // await called()
        const ter=await callLogin(user)
        //alert(JSON.stringify(ter.data))
        window.location.assign("/")
    }

    const  onReset=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":""
                
            }
               

        
        })
    }
     return(
        <>
        <div className="mt-5 container">
            <h2 className="text-center text-primary" >Login into Laptop dashboard</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-4">
                <TextField
                        id="input-with-icon-textfield"
                        label="TextField"
                        name="username"
                        onChange={onCollect}
                        value={user.username}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                        className="form-control"
                    />
                     <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={onCollect}
                            autoComplete="current-password"
                            className="mt-4 form-control"
                     />
                     <div className="mt-4 row justify-content-around">
                     
                     <Button variant="contained" className="col-1" color="success" onClick={()=>onLogin()}> 
                     <VpnKeyIcon color="inherit"/>
                     </Button>

                     <Button variant="contained" className="col-1" color="error" onClick={()=>onReset()}>
                     <RestartAltIcon/>
                     </Button>
                        

                     </div>
                    

                </div>

            </div>

        </div>
        </>
     )
}