import axios from 'axios'

const url="http://localhost:8080/CrudlProject"

const fine="sil:praba"
const tik=btoa(fine)

export const callDelete=async(object)=>{
    const t = await axios.delete(`${url}/delid/${object.lapID}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('valid')}`
        }
    })
    return t
}

export const callUpdate=async(object)=>{
    const t = await axios.put(`${url}/up`,object,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('valid')}`
        }
    })
    return t;
}


export const callCreate=async(object)=>{
    const t = await axios.post(`${url}/new`,object,{
        headers:{"Authorization":`Basic ${sessionStorage.getItem('valid')}`}
    })
    return t
}

export const callList=async()=>{
    try{
        const t = await axios.get(`${url}/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('valid')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const callLogout=async()=>{
    try{
        await axios.get(`${url}/logout`)
    }
    catch(err){}
    sessionStorage.removeItem('valid')
    return;
}




 export const callLogin=async(ob)=>{
    const credentials=ob.username+":"+ob.password
    const token=btoa(credentials)
    alert(token)
    try{
        const t=await axios.get(`${url}/`,{headers:{"Authorization":`Basic ${token}`}})
        if(t.data){
            sessionStorage.setItem("valid",token)
        }
        return t;
    }
    catch(hai){
        alert(hai)
    }
 }


export const paste=async()=>{
    const obj={
        "lapID":123,
        "model":"first generation",
        "brand":"apple",
        "cost":67000,
        "size":16.5,
     
    }
    await axios.post(`${url}/posting`,obj,{
        headers:{"Authorization":`Basic ${tik}`}
    })

}

 export const simple=async()=>{
    const hill="silviya";
    const mount=1998;
    await axios.get(`${url}/play/${hill}/${mount}`,{
        headers:{"Authorization":`Basic ${tik}`}
    })


 }


export const sample=async()=>{
    await axios.get(`${url}/haithere`,{
        headers:{"Authorization":`Basic ${tik}`}
    })

}