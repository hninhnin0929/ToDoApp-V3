<template>


  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <router-view/> -->
    <div class="container">
      <AddTodo></AddTodo>
      <FilterTodos/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';
export default {
    name: "App",
    components: { AddTodo, FilterTodos }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
