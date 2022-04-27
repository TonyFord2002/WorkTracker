import React from 'react'
import {useNavigate} from 'react-router-dom'
import {createJob} from '../services/work-api'

function Add() {
  const nav = useNavigate()

  const addJobsite = (event)=>{
      event.preventDefault()
      let add = { name: event.target.name.value
              }
      createJob(add)
      nav('/')
  }

  return (
    <div>
      <h1>Add A New Jobsite</h1>
        <form onSubmit={addJobsite}>
          Jobsite Name: <input type='text' name='name'/><br/>
          <input type='submit' value='Add Jobsite'/>
        </form>
    </div>
  )
}

export default Add