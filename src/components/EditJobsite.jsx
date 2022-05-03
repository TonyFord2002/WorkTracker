import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editJobsite , getJobsite, deleteJobsite} from '../services/jobsite-api'


function EditJobsite() {const [data, setData] = useState({})
let navigate = useNavigate()
const {id} = useParams()

useEffect(()=>{
    getJobsite(id)
    .then((res) => setData(res.data))
},[])

const editThisJobsite = (event)=> {
event.preventDefault()
    let edited = {name: event.target.name.value}
    editJobsite(id, edited)
    navigate(`/${id}`)
}

const deleteThisJobsite = ()=>{
deleteJobsite(id)
navigate(`/`)
}
return (
<div id='editjobsite'>
    
    <form onSubmit={editThisJobsite}>
        Name: <input type='text' name='name' defaultValue={data.name}/><br/>
        <input style={{borderRadius:'7px' }} type='submit' value='Edit Jobsite'/>
    </form>
        <button style={{borderRadius:'7px', backgroundColor:'red' }} onClick={deleteThisJobsite}> Delete this Jobsite</button><br/>
</div>
)
}

export default EditJobsite