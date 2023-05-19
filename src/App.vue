<template>
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center flex-col gap-[20px]">
    <!-- <img src="@/assets/spinner.svg" v-if="worker.workStatus === null" />
    <template v-else>
      <TrackerOnline v-if="worker.workStatus === 'online'"><Menu /></TrackerOnline>
      <TrackerOffline v-if="worker.workStatus === 'offline'"><Menu /></TrackerOffline> 
    </template> -->
    <Login />  
 
  </div>
</template>

<script>

import TrackerOnline from '@/components/TrackerOnline.vue'
import TrackerOffline from '@/components/TrackerOffline.vue'
import Login from '@/Pages/Login.vue'
import { mapActions, mapState } from 'vuex'

import Menu from './components/Menu/Menu.vue'

export default {
  name: 'App',
  components: {
    TrackerOnline,
    TrackerOffline,
    Menu,
    Login,
  },
  methods: {
    ...mapActions(['getWorkerInfo'])
  },
  computed: {
    ...mapState(['worker'])
  },
  created() {
    this.getWorkerInfo()
  },
}
</script>

<style>
</style>
