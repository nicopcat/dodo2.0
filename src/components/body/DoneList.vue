<template>
  <base-lists>
    <h2>做完啦 🎉🤭</h2>
    <transition-group fade tag="ul" v-if="isFiltering == ''">
      <base-single-li v-for="item in doneList" :key="item.id">
        <input type="checkbox" checked @click="uncheckTodoTask(item.id)" />
        <span class="li">
          <input
            type="text"
            v-model="item.taskName"
            @keyup.enter="editTodo(item.taskName, item.id)"
            @blur="editTodo(item.taskName, item.id)"
        /></span>
        <del-button @click="deleteDoneTask(item.id)">x</del-button>
      </base-single-li>
    </transition-group>

    <transition-group fade tag="ul" v-else>
      <base-single-li v-for="item in filteredTodos" :key="item.id">
        <input type="checkbox" checked @click="uncheckTodoTask(item.id)" />
        {{ item.taskName }}
        <del-button @click="deleteDoneTask(item.id)">x</del-button>
      </base-single-li>
    </transition-group>
    <div class="noTodos" v-if="isFiltering && filteredTodos == null">
      Oops! 没有相关任务哟..
    </div>
  </base-lists>
</template>

<script>
export default {
  computed: {
    doneList() {
      return this.$store.getters.doneList;
    },
    thefilteredWord() {
      return this.$store.getters.filteredWord;
    },
    filteredTodos() {
      // todoList.taskName.indexOf('thefilteredWord')
      return this.doneList.filter(
        (todo) => todo.taskName.indexOf(this.thefilteredWord) !== -1
      );
    },
    isFiltering() {
      return this.$store.getters.filteredWord;
    },
  },
  methods: {
    loadTodoList() {
      this.$store.dispatch("loadTodo");
    },
    uncheckTodoTask(id) {
      this.$store.dispatch("uncheckTodo", id);
      this.loadTodoList();
    },
    deleteDoneTask(id) {
      this.$store.dispatch("deleteTodo", id);
      this.loadTodoList();
    },
    editTodo(content, id) {
      this.$store.dispatch("editTodo", {
        content: content,
        id: id,
      });

      this.loadTodoList();
    },
  },
  mounted() {
    this.loadTodoList();
  },
};
</script>

<style scoped>
h2 {
  width: 98%;
  margin-left: 0.2em;
  padding: 0.5em 0;
  font-size: 1.6em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 0.2em;
  background-color: #fff;
  color: green;
}

ul .li input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  background-color: transparent;
  outline: none;
  text-decoration-line: line-through;
  color: rgba(0, 0, 0, 0.432);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.noTodos {
  color: rgb(196, 196, 196);
  margin: 2rem 2rem;
  font-style: italic;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}
/* 进入过程和离开过程的过渡 */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/* 离开时变为absolute，导致下方上升 */
.v-leave-active {
  text-decoration-line: none;
  /* position: absolute; */
}
/* 移动时的过渡时间 */
.v-move {
  transition: all 0.5s ease;
}
</style>
