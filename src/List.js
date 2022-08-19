import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { callList } from "./Contact"

export const List=(properties)=>{

    const [records,setRecords]=useState([])


    const loading=async()=>{
        const tmp=await callList()
        setRecords(tmp.data)

    }
    useEffect(()=>{
        loading()
    },[])

    const columns=[
        { field: 'lapID', headerName: 'Laptop ID', width: 200 },
        { field: 'model', headerName: 'Laptop Model', width: 200 },
        { field: 'brand', headerName: 'Laptop Brand', width: 300 },
        { field: 'cost', headerName: 'Laptop Price', width: 300 },
        { field: 'size', headerName: 'Laptop Size', width: 300 },
        

    ];


    return(
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="table-responsive-lg">
                    <div style={{ height: 400, width: '100%' }} className="col-lg-8 col-md-10 col-sm-12">
                    <DataGrid
                    onSelectionModelChange={(collected)=>{
                        alert(collected)
                        const obj=records.filter((each)=>{
                            return each.lapID==collected
                        })
                        // alert(JSON.stringify(obj))
                        properties.filling(obj[0])
                        // window.location.assign("/")
                    }}
                    
                                columns={columns}
                                rows={records}
                                pageSize={7}
                                getRowId={(jes)=>jes.lapID}
                                rowsPerPageOptions={[7]}
                            />

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}