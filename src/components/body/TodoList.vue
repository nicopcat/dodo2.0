<template>
  <base-lists>
    <h2>我我我.. 我马上做 😓</h2>
    <trans-group v-if="isFiltering == ''">
      <!-- <transition-group fade tag="ul"> -->
      <base-single-li v-for="item in todoList" :key="item.id">
        <input type="checkbox" @click="checkTodoTask(item.id)" />

        <span class="li">
          <input
            type="text"
            v-model="item.taskName"
            @keyup.enter="editTodo(item.taskName, item.id)"
            @blur="editTodo(item.taskName, item.id)"
        /></span>

        <del-button @click="deleteTodoTask(item.id)">x</del-button>
      </base-single-li>
      <!-- </transition-group> -->
    </trans-group>
    <trans-group v-else>
      <!-- <transition-group fade tag="ul"> -->
      <base-single-li v-for="item in filteredTodos" :key="item.id">
        <input type="checkbox" @click="checkTodoTask(item.id)" />
        {{ item.taskName }}
        <del-button @click="deleteTodoTask(item.id)">x</del-button>
      </base-single-li>

      <!-- </transition-group> -->
    </trans-group>
    <div class="noTodos" v-if="isFiltering && filteredTodos.length <= 0">
      Oops! 没有相关任务哟..
    </div>
  </base-lists>
</template>
 
<script>
export default {
  data() {
    return {
      thisTodo: "",
    };
  },
  computed: {
    todoList() {
      return this.$store.getters.todoList;
    },
    thefilteredWord() {
      return this.$store.getters.filteredWord;
    },
    filteredTodos() {
      // todoList.taskName.indexOf('thefilteredWord')
      return this.todoList.filter(
        (todo) => todo.taskName.indexOf(this.thefilteredWord) !== -1
      );
    },
    isFiltering() {
      return this.$store.getters.filteredWord;
    },
  },
  methods: {
    checkTodoTask(id) {
      this.$store.dispatch("checkTodo", id);
      this.loadTodoList();
    },
    deleteTodoTask(id) {
      this.$store.dispatch("deleteTodo", id);
      this.loadTodoList();
    },
    loadTodoList() {
      this.$store.dispatch("loadTodo");
    },
    editTodo(content, id) {
      this.$store.dispatch("editTodo", {
        content: content,
        id: id,
      });

      this.loadTodoList();
    },
  },
  created() {
    this.loadTodoList();
  },
};
</script>

<style scoped>
h2 {
  width: 98%;
  margin-left: 0.2em;
  padding: 0.5em 0;
  color: rgba(255, 166, 0, 0.795);
  background-color: #fff;
  font-size: 1.6em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
ul li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

ul input {
  width: 1rem;
  height: 1rem;
}

.li input {
  border: none;
  background-color: transparent;
  outline: none;
}

.noTodos {
  color: rgb(196, 196, 196);
  margin: 2rem 2rem;
  font-style: italic;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
/* 进入过程和离开过程的过渡 */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/* 离开时变为absolute，导致下方上升 */
.v-leave-active {
  text-decoration-line: line-through;
  /* position: absolute; */
}
/* 移动时的过渡时间 */
.v-move {
  transition: all 0.5s ease;
}
</style>

