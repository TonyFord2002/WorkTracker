import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editJob , getJob, deleteJob} from '../services/job-api'

function Edit() {
  const [data, setData] = useState({})
  let navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
      getJob(id)
      .then((res) => setData(res.data))
  },[])

const editThisJob = (event)=> {
  event.preventDefault()
      let edited = {description: event.target.description.value,
                    image: event.target.image.value,
                    cost: event.target.cost.value

      }
      editJob(id, edited)
      navigate(`/${data.jobsiteId}`)
  }

const deleteThisJob = ()=>{
  deleteJob(id)
  navigate(`/${data.jobsiteId}`)
  }

return (
  <div id="editjob">
      
      <form onSubmit={editThisJob}>
      Description: <input type='text' name='description' defaultValue={data.description}/><br/>
      Image:<input type='text' name='image' defaultValue={data.image} size='50'/><br/>
      Cost: <input type='text' name='cost' defaultValue={data.cost}/><br/>
      <input style={{borderRadius:'7px' }} type='submit' value='Edit Job'/>
  </form>
  <button style={{borderRadius:'7px', backgroundColor:'red' }} onClick={deleteThisJob}> Delete this job</button><br/>
  </div>
)
}

export default Edit