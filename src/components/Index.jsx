import React from 'react'
import {useState, useEffect} from 'react'
import {getJobs} from '../services/work-api'

function Index() {
  const [jobsite, setJobsite] = useState([])

  useEffect(()=>{
    getJobs()
    .then((res)=>setJobsite(res.data))
  },[])

  return (
    <div id='container'>
        <div id='jobs'>
          {jobsite.map((job, i)=>{
            return(
              <div id='job' key={i} >
                <h2><a href = {`/${job._id}`}>{job.name}</a></h2>
              </div>
            )
          })}
        </div>     
    </div>
  )
}

export default Index