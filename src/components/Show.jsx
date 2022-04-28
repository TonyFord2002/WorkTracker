import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getJob, editJob} from '../services/work-api'
import {createWorker, getWorkers} from '../services/worker-api'

function Show() {
  const nav = useNavigate()
  const {id} = useParams()
  const [jobsite, setJobsite]= useState([])
  const [jobs, setJobs] = useState([])
  const [worker, setWorker]= useState([])

  useEffect(()=>{
    getJob(id)
    .then((res)=>{setJobsite(res.data)
                  setJobs(res.data.jobs)
    getWorkers()
    .then((res)=>{setWorker(res.data)})
    })
  },[])

  const addJob = event=>{
    event.preventDefault()
    const job = jobs
    job.push({description: event.target.description.value, image: event.target.image.value, cost: event.target.cost.value})
  
    const newJob ={description: jobs.description, image: jobs.image, cost: jobs.cost, jobs: job}
    editJob(id, newJob)
    nav(`/${id}`)
  }

   const addWorker = event=>{
    event.preventDefault()
    let person = {name: event.target.name.value, rate: event.target.rate.value, hours: event.target.hours.value}
    createWorker(person)
    nav(`/${id}`)

  }
console.log(worker)
  return (
    <div>
      <h1>{jobsite.name}</h1>
      
      {jobs.map((work, i)=>{
        return(
          <div id='jobs' key={i}>
            <div id='desc'>{work.description}</div>
            <div id='cost'>${work.cost}</div>
            <div id='image'>{work.image}</div>
            
             <div id='worker'>
              <h3>Add workers</h3>
              <form onSubmit={addWorker}>
                Name:<input type='text' name='name'/><br/>
                Pay: <input type='number' name='rate'/><br/>
                Hours: <input type='number' name='hours'/><br/>
                <input type='submit'/>
              </form>
               {worker.map((person, j)=>{
                  return(
                    <div id='who' key={j}>
                      <div id='person'>{person.name}</div>
                      <div id='rate'>{person.rate}</div>
                      <div id='hours'>{person.hours}</div>
                    </div >
                  )}
                )}
              </div>
          </div>
        )
      })}

      <h3>Add new job</h3>
      <form onSubmit={addJob}>
        work done:<input type='text' name='description'/><br/>
        cost:<input type='number' name='cost'/><br/>
        Image:<input type='text' name='image'/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Show