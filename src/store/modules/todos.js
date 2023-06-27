import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 2,
            title: 'Todo Two'
        },
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, completed: false
        });
        console.log("addTodo = ", response.data);

        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id){
        console.log("this is deletetodo")
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
        console.log(id)
    },
    async filterTodos({ commit }, e){
        console.log(e.target.options);
        // Get Selected Number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log("limit ", limit);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        console.log(response.data);
        commit('setTodos', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
    state,
    getters,
    actions,
    mutations
}
