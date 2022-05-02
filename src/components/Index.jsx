import React from 'react'
import {useState, useEffect} from 'react'
import {getJobsites} from '../services/jobsite-api'

function Index() {
  const [jobsite, setJobsite] = useState([])

  useEffect(()=>{
    getJobsites()
    .then((res)=>setJobsite(res.data))
  },[])

  return (
    <div id='container'>
      <img id ='ford' style={{height:'300px'}}src = '../FordServices.png'/>
        <div id='jobsite'>
          {jobsite.map((jobname, i)=>{
            return(
              <div id='job' key={i} >
                <h2><a id='link' href = {`/${jobname._id}`}>{jobname.name}</a></h2>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Index