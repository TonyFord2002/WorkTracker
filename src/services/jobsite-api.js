import axios from 'axios'
const url = 'https://worktracker-api.herokuapp.com/jobsite/'

export function getJobsites(){
    const response = axios.get(url)
    return response
}

export const getJobsite = (id)=>{
    const response = axios.get(url+id)
    return response
}

export function deleteJobsite(id){
    const response = axios.delete(url+id)
    return response
}

export function createJobsite(add){
    const response = axios.post(url, add)
    return response
}

export const editJobsite = (id, edit)=>{
    const response = axios.put(url+id, edit)
    return response
}