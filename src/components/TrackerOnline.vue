<template>
  <div>
  <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px] max-h-[45px]">
    <p class="text-grey-dark text-small">{{ currentTimeWorking }} / 07:00:53</p>
    <Button :onClick="clickOnPause" type="neutral">Pausar</Button>
    <Button :onClick="clickOnClockOut" type="danger">Salir</Button>
    <p class="text-grey-light-1">|</p>
    <div class="flex">
      <img src="@/assets/avatar.png" class="mr-[-5px]" />
      <img src="@/assets/elipse.svg" />
    </div>
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
      <img src="@/assets/chevron-left.svg" class="cursor-pointer" />
      <slot v-if="showMenu" />
    </div>
    </div>
  </div>
</template>
<script>

import Button from '@/components/Button.vue'
import { clockOut } from '@/services/API'
import { mapState, mapActions } from 'vuex'
import { formatTime } from '@/utils/dates'

export default {
  name: 'Tracker-Online',
  components: {
    Button
  },
  data () {
    return {
      currentSeconds: 0,
      currentMinutes: 0,
      currentHours: 0,
      showMenu: false,
      intervalId: null,
      timeoutMenu: null
    }
  },
  methods: {
    ...mapActions(['getWorkerInfo']),
    async clickOnClockOut () {
      await clockOut({ employeeId: this.worker.id, workEntryOut: { coordinates: { latitude: 39.4697500, longitude: -0.3773900 } } })
      this.getWorkerInfo()
    },
    clickOnPause () {
      clearInterval(this.intervalId)
    },
    startTimer () {
      const { hours, minutes, seconds } = this.timeWorker
      this.currentSeconds =  seconds
      this.currentMinutes = minutes
      this.currentHours = hours
    },
    calculateTime () {
      this.currentSeconds = this.currentSeconds + 1 
  
      const addMinute = this.currentSeconds === 60
      
      if(addMinute) {
        this.currentSeconds = 0
        this.currentMinutes = this.currentMinutes + 1
      }
      
      const addHour = this.currentMinutes === 60
      if(addHour) {
        this.currentMinutes = 0
        this.currentHours = this.currentHours + 1
      }
    },
    onMouseOver () {
      clearInterval(this.timeoutMenu)
      this.showMenu = true
    },
    onMouseLeave () {
      this.timeoutMenu = setTimeout(() => {
        this.showMenu = false
    }, 500)
  },
  },

  computed: {
    ...mapState(['worker', 'timeWorker']),
    currentTimeWorking () {
      const dateFormated = formatTime({ hours: this.currentHours, minutes: this.currentMinutes, seconds: this.currentSeconds})
      return dateFormated
    }
  },
  created() {
    this.startTimer()
    this.intervalId = setInterval(this.calculateTime, 1000)
  }
}
</script>
