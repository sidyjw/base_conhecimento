import Vue from 'vue'
import Toasted from 'vue-toasted'

const config = {
    iconPack: 'fontawesome',
    duration: 3000,
}

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000,
})

Vue.toasted.register('defaultSuccess', 'Operação realizada com sucesso!', {
    type: 'success',
    icon: 'check',
})

Vue.toasted.register(
    'defaultError',
    payload => (!payload.msg ? 'Oops... Erro inesperado.' : payload.msg),
    { type: 'error', icon: 'times' },
)
