import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { createJob, getJobs } from '../services/job-api'
import {getJobsite} from '../services/jobsite-api'
import {createWorker, getWorkers} from '../services/worker-api'

function Show() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [jobsite, setJobsite]= useState([])
  const [jobs, setJobs] = useState([])
  const [workers, setWorkers]= useState([])
  var total = 0
  
  useEffect(()=>{
    getJobsite(id)
    .then((res)=>{setJobsite(res.data)})
    
    getWorkers()
    .then((res)=>{setWorkers(res.data)})
    
    getJobs(id)
    .then((res)=>setJobs(res.data))
  },[])
  
  const addJob = event=>{
    let job ={description: event.target.description.value, cost: event.target.cost.value, jobsiteId: jobsite._id }
    createJob(job)
    navigate(`/${id}`)
  }
  
   const addWorker = event=>{
    let person = {name: event.target.name.value, rate: event.target.rate.value, hours: event.target.hours.value, jobId: event.target.jobId.value, jobsiteId: jobsite._id}
    createWorker(person)
    navigate(`/${id}`)
  }

  return (
    <div>
      <span id='nameandbutton'><p><label id='jobname'>{jobsite.name}</label> &nbsp; <button style={{borderRadius:'7px' }} onClick={()=>{navigate(`/${id}/editjobsite`)}}>Edit Jobsite</button></p></span>
      
      {jobs.map((work, i)=>{
        {total= total + work.cost}        
        return(
          <div id='alljobs' key={i}>
            <p id='title'>Jobs</p>
            <div id='desc'>Job Completed: {work.description}</div>
            <div id='cost'>Cost: ${work.cost}</div>
            <button style={{borderRadius:'7px' }} onClick={()=>{navigate(`/${work._id}/edit`)}}>Edit Job</button>
              <div id='worker'>
                <p id='title'>Workers</p>
                {workers.map((person, j)=>{
                  return(
                    <div id='who' key={j}>
                    {work._id===person.jobId?
                    <div>
                      <div id='person'>Name: {person.name}</div>
                      <div id='rate'>Rate: ${person.rate}/hr</div>
                      <div id='hours'>Hours: {person.hours}</div>
                      <button style={{borderRadius:'7px' }} onClick={()=>{navigate(`/${person._id}/editWorker`)}}>Edit Worker</button>
                    </div>:null}<br/>
                    </div >
                    )}
                    )}
              </div>
              <div id='workerform'>
                  <h3>Add workers</h3>
                  <form onSubmit={addWorker}>
                    Name:<input type='text' name='name'/><br/>
                    Pay: <input type='number' name='rate'/><br/>
                    Hours: <input type='number' name='hours'/><br/>
                    <input type ='hidden' name='jobId' defaultValue={work._id}/>
                    <input style={{borderRadius:'7px' }} type='submit' value='Add Worker'/>
                  </form>
                  </div><br/>
      </div>
        )
      })}
      <div id='jobform'>
      <h3>Add new job</h3>
      <form onSubmit={addJob}>
        Job: <input type='text' name='description'/><br/>
        Cost: <input type='number' name='cost'/><br/>
        <input style={{borderRadius:'7px' }} type='submit' value='Add Job'/>
      </form>
      </div><br/>
      <div id='total'>
        Total Bill: ${total}
      </div>
    </div>
  )
}

export default Show