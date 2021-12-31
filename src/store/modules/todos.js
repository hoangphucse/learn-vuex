import axios from 'axios'

const todosModule = {
    state: {
        todos: [],
    },
    getters: {
        doneTodos: (state) => state.todos.filter((todo) => todo.completed),
        progress: (state, getters) => {
            const doneTodos = getters.doneTodos.length
            const percentProgress = Math.round(
                (doneTodos / state.todos.length) * 100
            )
            return percentProgress
        },
        todos: (state) => state.todos,
    },
    mutations: {
        MARK_COMPLETE(state, todoId) {
            state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed
                    return todo
                }
            })
        },
        DELETE_TODO: (state, todoId) => {
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        ADD_TODO: (state, newTodo) => {
            state.todos.unshift(newTodo)
        },
        SET_TODOS: (state, todos) => {
            state.todos = todos
        },
    },
    actions: {
        deleteTodo: async ({ commit }, todoId) => {
            try {
                await axios.delete(
                    `https://jsonplaceholder.typicode.com/todos/${todoId}`
                )
                commit('DELETE_TODO', todoId)
            } catch (error) {
                console.log(error)
            }
        },
        addTodo: async ({ commit }, newTodo) => {
            try {
                await axios.post(
                    `https://jsonplaceholder.typicode.com/todos`,
                    newTodo
                )
                commit('ADD_TODO', newTodo)
            } catch (error) {
                console.log(error)
            }
        },
        getTodos: async ({ commit }) => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos?_limit=7`
                )
                commit('SET_TODOS', response.data)
            } catch (error) {
                console.log(error)
            }
        },
    },
}

export default todosModule
