import React from 'react'
import {useState, useEffect} from 'react'
import {getJobsites} from '../services/work-api'

function Index() {
  const [jobsite, setJobsite] = useState([])

  useEffect(()=>{
    getJobsites()
    .then((res)=>setJobsite(res.data))
  },[])

  return (
    <div id='container'>
        <div id='jobs'>
          {jobsite.map((jobname, i)=>{
            return(
              <div id='job' key={i} >
                <h2><a href = {`/${jobname._id}`}>{jobname.name}</a></h2>
              </div>
            )
          })}
        </div>     
    </div>
  )
}

export default Index