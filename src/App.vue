<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1 class="title">todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        >
      </header>
      <section class="main">
        <ul class="todo-list">
          <li class="todo" v-for="(todo, key) in todos" :key="key">
            <div class="view">
              <label>{{ todo }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 300;
  background: #f5f5f5;
  color: #4d4d4d;
  min-height: 230px;
  max-height: 550px;
  margin: 0 auto;
  line-height: 1.4rem;
  -webkit-font-smoothing: antialiased;
}
</style>




