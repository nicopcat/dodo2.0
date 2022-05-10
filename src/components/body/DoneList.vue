<template>
  <base-lists>
    <h2>完成任务 🎉</h2>
    <transition-group fade tag="ul" v-if="isFiltering == '' && doneList !== 0">
      <base-single-li v-for="item in doneList" :key="item.id">
        <input type="checkbox" checked @click="uncheckTodoTask(item.id)" />
        <span class="li">
          <input
            type="text"
            v-model="item.taskName"
            @keyup.enter="editTodo(item.taskName, item.id)"
            @blur="editTodo(item.taskName, item.id)"
        /></span>
        <del-button @click="deleteDoneTask(item.id)">✖</del-button>
      </base-single-li>
    </transition-group>

    <transition-group fade tag="ul" v-else>
      <base-single-li v-for="item in filteredTodos" :key="item.id">
        <input type="checkbox" checked @click="uncheckTodoTask(item.id)" />
        {{ item.taskName }}
        <del-button @click="deleteDoneTask(item.id)">✖</del-button>
      </base-single-li>
    </transition-group>
  </base-lists>
</template>

<script>
export default {
  computed: {
    doneList() {
      if (this.$store.getters.doneList == 0) {
        return 0;
      } else {
        return this.$store.getters.doneList;
      }
    },
    thefilteredWord() {
      return this.$store.getters.filteredWord;
    },
    filteredTodos() {
      // todoList.taskName.indexOf('thefilteredWord')
      if (this.doneList == 0) {
        return 0;
      } else {
        return this.doneList.filter(
          (todo) => todo.taskName.indexOf(this.thefilteredWord) !== -1
        );
      }
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
  padding: 0.3em 0;
  color: green;
  background-color: #fff;
  font-size: 1.4em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

ul .li input {
  width: 75%;
  padding: 0 0.5em;
  border: none;
  color: rgba(149, 149, 149, 0.735);
  text-decoration: line-through;
  background-color: transparent;
  outline: none;
  font-size: 1em;
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
