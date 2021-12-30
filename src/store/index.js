import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            { id: 1, title: 'Viec 1', completed: false },
            { id: 2, title: 'Viec 2', completed: true },
            { id: 3, title: 'Viec 3', completed: false },
        ],
        auth: {
            isAuthenticated: true,
        },
    },
}

const store = new Vuex.Store(storeData)

export default store
