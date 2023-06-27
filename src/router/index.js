import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/AddTodo',
      name: 'AddTodo',
      component: AddTodo
    },
  ]
})
