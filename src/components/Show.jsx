import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getJob, editJob} from '../services/work-api'

function Show() {
  const nav = useNavigate()
  const {id} = useParams()
  const [job, setJob] = useState([])
  const [worker, setWorker] = useState([])

  useEffect(()=>{
    getJob(id)
    .then((res)=>{setJob(res.data)
                  setWorker(res.data.worker)})
  },[])


  return (
    <div>
      <h1>{job.name}</h1>
    </div>
  )
}

export default Show