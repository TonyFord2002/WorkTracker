import axios from 'axios'
const url = 'http://localhost:3001/job/'

export function getJobs(id){
    const response = axios.get(url+'/jobsiteid/'+id)
    return response
}

export const getJob = (id)=>{
    const response = axios.get(url+id)
    return response
}

export function deleteJob(id){
    const response = axios.delete(url+id)
    return response
}

export function createJob(add){
    const response = axios.post(url, add)
    return response
}

export const editJob = (id, edit)=>{
    const response = axios.put(url+id, edit)
    return response
}