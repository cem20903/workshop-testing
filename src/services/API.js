import http from './http'
import { getStatusWorker } from '@/services/factories/factory'

async function getCurrentStatus () {
  try {
    return http.get().then(res => {
      return getStatusWorker(res)
    })
  } catch (err) {
    console.log(err)
  }
  
}

async function clockIn (params) {
  try {
    return http.post('/clock-in', params)
  } catch (err) {
    console.log(err)
  }
  
}

async function clockOut (params) {
  try {
    return http.post('/clock-out', params)
  } catch (err) {
    console.log(err)
  }
}

async function login (params) {
  try {
    return http.post('/login', params)
  } catch (err) {
    console.log(err)
  }
}

export { getCurrentStatus, clockIn, clockOut, login }
