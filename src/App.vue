<template>
  <div class="app">
    <the-header></the-header>
    <main-part></main-part>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import MainPart from "./components/body/MainPart.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    MainPart,
    TheFooter,
  },
  methods: {
    loadTodoList() {
      this.$store.dispatch("loadTodo");
    },
  },
  mounted() {
    this.loadTodoList();
  },
};
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
ul,
li,
input {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  height: 100%;
  min-width: 375px;
  background-color: rgb(215, 231, 245);
}

li {
  list-style: none;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
