// import { WindowSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { callLogout } from "./Contact"
import { Login } from "./Login"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { List } from "./List"
import { Read } from "./Read"
import { Create } from "./Create";

export const Home=()=>{
    const [logview,setLogview]=useState(true)
    const [listview,setListView]=useState(false)
    const [readview,setReadView]=useState(false)
    const [createview,setCreateView]=useState(false)
    const [databox,setDataBox]=useState({})


    const check=()=>{
        const t=sessionStorage.getItem("valid")
        if(t){
            setLogview(false) 
        }
        else{
            setLogview(true)
        }
    }
    useEffect(()=>{
        //sessionStorage.removeItem("valid")
        check()

    },[])

    return(
        <>
        {
            (logview)?<Login/>
            :
            <>
            <div className="container-fluid">
            <h3>homepage</h3>
            <div className="row justify-content-around">
            <Button className="col-1" color="error" onClick={async()=>{
                await callLogout()
                window.location.assign("/")
            }}>
               <MeetingRoomIcon/>Logout
            </Button>
            <Button className="col-1" color="success" onClick={()=>{
                setListView(true)
                setCreateView(false)
            }}>
                 <FormatListBulletedIcon/>List
            </Button>
            <Button className="col-1" color="primary" onClick={()=>{
                setListView(false)
                alert(JSON.stringify(databox))
                setReadView(true)
            }}>
                <ChromeReaderModeIcon/>Read

            </Button>
            <Button className="col-1" color="warning" onClick={()=>{
                setCreateView(true)
             }}>
                <NoteAddIcon/>Create
            </Button>
            </div>
            {
                 (createview)?<Create/>:
                 (listview)?<List filling={setDataBox}/>:
                 (readview)?<Read obj={databox}/>:<></>

            }

            
            </div>
            </>
        }


        </>
    )
}
