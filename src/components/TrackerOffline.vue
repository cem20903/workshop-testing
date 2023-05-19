<template>
  <div class="bg-grey-light flex justify-around items-center w-[408px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">{{ timeWorkerWithFormat }}</p>
    <Button type="primary" :onClick="clickOnClockIn">Entrar</Button>
    <p class="text-grey-light-1">|</p>
    <img src="@/assets/avatar.png">
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
      <img src="@/assets/chevron-left.svg" class="cursor-pointer" >
      <slot v-if="showMenu" />
    </div>
  </div>
</template>
<script>

import { mapActions, mapState } from 'vuex'
import Button from '@/components/Button.vue'
import { clockIn } from '@/services/API'

export default {
  name: 'Tracker-Offline',
  components: {
    Button
  },
  data () {
    return {
      showMenu: false,
      timeoutMenu: null
    }
  },
  methods: {
   ...mapActions(['getWorkerInfo']),
    async clickOnClockIn () {  
      await clockIn({ employeeId: this.worker.id, workEntryIn: { coordinates: { latitude: 39.4697500, longitude: -0.3773900 } } }) 
      this.getWorkerInfo()
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
    ...mapState(['worker', 'timeWorkerWithFormat'])
  },
}
</script>
