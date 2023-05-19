<template>
  <button 
    class="rounded-[12px] px-[38px] text-white text-small w-[110px] h-[27px] box-border"
    :class="buttonClasses[type]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
 name: 'custom-button',
 props: {
  type: {
    type: String
  },
  onClick: {
    type: Function,
    required: true
  }
 },
  data () {
    return {
      buttonClasses: {
        primary: 'bg-green',
        danger: 'bg-salmon',
        neutral: 'bg-grey-light-1'
      }
    }
  },
}

</script>
