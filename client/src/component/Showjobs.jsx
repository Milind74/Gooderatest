import React,{useState,useEffect} from 'react'
import axios from "axios"
const Showjobs = () => {
    const[jobs,setJobs]=useState([])
    const[search,SetSearch]=useState("")
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

    const searchData=()=>{
        const filterData=jobs.filter((e)=>{
        return e.location.toLowerCase().includes(search.toLowerCase())    
        })
        setJobs(filterData)

    }

   
    return (
        <>
        <div>
            <div className="search">

            <input type="text" onChange={(e)=>SetSearch(e.target.value)} />
            <button onClick={searchData}>Search</button>
            </div>

            {jobs.map((value)=>{
                return(
                <div style={{display:"grid",gridTemplateColumns:"50%",border:"1px solid black",
                width:"50%",margin:"auto","marginTop":"100px",fontFamily:"sans-serif",fontSize:"20px"
                }}>
                <p > title:{value.title}</p>
                <p>description:{value.description}</p>
                <p>external:{value.external}</p>
                <p>level:{value.level}</p>
                <p>publicatiob_date:{value.publicatiob_date}</p>
                <p>location:{value.location}</p>
             </div>
                )
                })
            }
            
        </div>
        </>
    )
}

export default Showjobs
