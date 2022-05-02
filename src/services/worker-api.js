import axios from 'axios'
const url = 'https://worktracker-api.herokuapp.com/worker/'

export function getWorkers(){
    const response = axios.get(url)
    return response
}

export function getWorker(id){
    const response = axios.get(url+id)
    return response
}

export function deleteWorker(id){
    const response = axios.delete(url+id)
    return response
}

export function createWorker(add){
    const response = axios.post(url, add)
    return response
}

export function editWorker(id, edit){
    const response = axios.put(url+id, edit)
    return response
}