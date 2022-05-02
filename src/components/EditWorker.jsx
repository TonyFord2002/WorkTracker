import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editWorker , getWorker, deleteWorker} from '../services/worker-api'

function EditWorker() {
  const [data, setData] = useState({})
  let navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
      getWorker(id)
      .then((res) => setData(res.data))
  },[])

const editThisWorker = (event)=> {
  event.preventDefault()
      let edited = {name: event.target.name.value,
                    rate: event.target.rate.value,
                    hours: event.target.hours.value
      }
      editWorker(id, edited)
      navigate(`/${data.jobsiteId}`)
  }

const deleteThisWorker = ()=>{
  deleteWorker(id)
  navigate(`/${data.jobsiteId}`)
  }
console.log(data)
return (
  <div>
      
      <form onSubmit={editThisWorker}>
      Name: <input type='text' name='name' defaultValue={data.name}/><br/>
      Rate:<input type='text' name='rate' defaultValue={data.rate} size='50'/><br/>
      Hours: <input type='text' name='hours' defaultValue={data.hours}/>
      <input style={{borderRadius:'7px' }} type='submit' value='Edit Worker'/>
  </form>
  <button style={{borderRadius:'7px' }} onClick={deleteThisWorker}> Delete this worker</button><br/>
  </div>
)
}

export default EditWorker