
import { createStore } from 'vuex'

import { calculateDifferenteBetweenTwoDates, formatTime } from '@/utils/dates'
import { getCurrentStatus } from '@/services/API'

const store = createStore({
  state () {
    return {
      worker: {
        firstName: null,
        lastName: null,
        id: null,
        workStatus: null
      },
      timeWorker: {
        hours: null,
        minutes: null,
        seconds: null
      },
      timeWorkerWithFormat: ''
    }
  },
  mutations: {
    setDataWorker(state, worker) {
      state.worker = worker
    },
    setDifferenceTimes(state, timeWorker) {
      state.timeWorker = timeWorker
    },
    setTimeWorkerWithFormat(state, timeWorkerWithFormat) {
      state.timeWorkerWithFormat = timeWorkerWithFormat
    }
  },
  actions: {
    async getWorkerInfo ({ commit }) {
    const response = await getCurrentStatus()

    const { workEntryIn, workEntryOut } = response
    const { firstName, lastName, id, workStatus } = response.employee
    console.log(response, 'RESPONSE')

    const outDate = workEntryOut ? workEntryOut.date : workEntryIn.date
    const timeWorker = calculateDifferenteBetweenTwoDates(new Date(workEntryIn.date), new Date(outDate))
    const timeWithFormat = formatTime(timeWorker)

    commit('setDataWorker', { firstName, lastName, id, workStatus })    
    commit('setDifferenceTimes', timeWorker)
    commit('setTimeWorkerWithFormat', timeWithFormat)
    
  }
}
})

export default store
