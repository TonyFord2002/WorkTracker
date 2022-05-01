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
    let audio = new Audio('https://www.101soundboards.com/storage/board_sounds_rendered/51217.mp3')
    audio.play()
    let job ={description: event.target.description.value, image: event.target.image.value, cost: event.target.cost.value, jobsiteId: jobsite._id }
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
      <h1>{jobsite.name}</h1>
      
      {jobs.map((work, i)=>{
        {total= total + work.cost}        
        return(
          <div id='jobs' key={i}>
            <h2>Jobs</h2>
            <div id='desc'>Job done: {work.description}</div>
            <div id='cost'>${work.cost}</div>
            <img id='image' src={work.image}/><br/>
            <button onClick={()=>{navigate(`/${work._id}/edit`)}}>Edit Job</button>
              <div id='worker'>
                <h2>Workers</h2>
                {workers.map((person, j)=>{
                  return(
                    <div id='who' key={j}>
                    {work._id===person.jobId?
                    <div>
                      <div id='person'>Name: {person.name}</div>
                      <div id='rate'>Rate: ${person.rate}/hr</div>
                      <div id='hours'>Hours: {person.hours}</div>
                      <button onClick={()=>{navigate(`/${person._id}/editWorker`)}}>Edit Worker</button>
                    </div>:null}<br/>
                    </div >
                    )}
                    )}
              </div>
                  <h3>Add workers</h3>
                  <form onSubmit={addWorker}>
                    Name:<input type='text' name='name'/><br/>
                    Pay: <input type='number' name='rate'/><br/>
                    Hours: <input type='number' name='hours'/><br/>
                    <input type ='hidden' name='jobId' defaultValue={work._id}/>
                    <input type='submit' value='Add Job'/>
                  </form><br/>
          </div>
        )
      })}

      <h3>Add new job</h3>
      <form onSubmit={addJob}>
        Work Done:<input type='text' name='description'/><br/>
        Cost:<input type='number' name='cost'/><br/>
        Image:<input type='text' name='image'/><br/>
        <input type='submit'/>
      </form><br/>
      <div>
        Total Bill: ${total}
      </div>
    </div>
  )
}

export default Show