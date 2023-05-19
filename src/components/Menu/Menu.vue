<template>
  <div class="absolute ml-[-230px] mt-[20px]">
    <ul class="bg-white text-grey-dark w-[247px] cursor-pointer">
    <div @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false" class="max-h-[45px]">
      <li class="h-[45px] flex items-center justify-center">
        <img src="@/assets/chevron-down.svg" class="relative right-[60px]">
        <span>Mis cuentas</span>
      </li>
        <sub-menu v-if="showSubMenu" />
      </div>
      <li class="h-[45px] flex justify-center items-center">Vista Empleado</li>
      <li class="h-[45px] flex justify-center items-center">Mi perfil</li>
      <li class="h-[45px] flex justify-center items-center">Cerrar sesión</li>
    </ul>
  </div>
</template>

<script>
import SubMenu from '@/components/Menu/SubMenu.vue'
export default {
  name: 'menu-navigation',
    components: { 
    SubMenu
  },
  data () {
    return {
      showSubMenu: false
    }
  }
}
</script>
