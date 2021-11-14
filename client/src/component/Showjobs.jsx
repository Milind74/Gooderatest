import React from 'react'
import axios from "axios"

const Showjobs = () => {
    const get=async()=>{
        var res=await axios.get("http://localhost:8000/job")
        console.log(res)
    }
    get()
    return (
        <div>
            
        </div>
    )
}

export default Showjobs
