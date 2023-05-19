<template>
    <div class="flex gap-[20px] flex-col">
        <h1>Login</h1>
        <input type="text" class="p-2 rounded-sm" placeholder="Correo" v-model="email" />
        <input type="password"  class="p-2 rounded-sm" placeholder="Contraseña" v-model="password" />
        <div class="flex gap-[10px]">
        <Button :onClick="onLogin" type="primary">Login</Button>
        <Button :onClick="resetForm" type="neutral">Limpiar</Button>
        </div>
    </div>
</template>

<script>

import { login } from '@/services/API'
import Button from '@/components/Button.vue'

export default {
    name: 'LoginApp',
    components: { Button },
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async onLogin () {
            await login()
        },
        resetForm () {
            this.email = ''
            this.password = ''
        }
    }
}
</script>