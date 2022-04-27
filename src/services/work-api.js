import axios from 'axios'
const url = 'http://localhost:3001/workapp/'

export function getJobs(){
    const response = axios.get(url)
    return response
}

export function getJob(id){
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

export function editJob(id, edit){
    const response = axios.put(url+id, edit)
    return response
}