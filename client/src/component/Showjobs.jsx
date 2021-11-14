import React,{useState,useEffect} from 'react'
import axios from "axios"

const Showjobs = () => {
    const[jobs,setJobs]=useState([])
    console.log(jobs);
    const get=async()=>{
        try{
        var res=await axios.get("http://localhost:8000/job")
        setJobs(res.data.job)
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
       get()
    }, [])
   
    return (
        <>
        <div>
            <div className="search">

            <input type="text" />
            <button>Search</button>
            </div>

            {jobs.map((value)=>{
                return(
                <div>
                <p>{value.title}</p>
                <p>{value.description}</p>
                <p>{value.external}</p>
                <p>{value.level}</p>
                <p>{value.publicatiob_date}</p>
                <p>{value.location}</p>
                </div>
                )
                })
            }
            
        </div>
        </>
    )
}

export default Showjobs
