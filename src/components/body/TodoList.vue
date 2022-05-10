<template>
  <base-lists>
    <h2>任务列表 📝</h2>
    <transition-group appear tag="ul" v-if="thefilteredWord == ''">
      <base-single-li v-for="item in todoList" :key="item.id">
        <span class="checkbox">
          <input type="checkbox" @click="checkTodoTask(item.id)" />
        </span>
        <span class="li">
          <input
            type="text"
            v-model="item.taskName"
            @keyup.enter="editTodo(item.taskName, item.id)"
            @blur="editTodo(item.taskName, item.id)"
        /></span>
        <del-button @click="deleteTodoTask(item.id)">✖</del-button>
      </base-single-li>
    </transition-group>

    <transition-group fade tag="ul" v-else>
      <base-single-li v-for="item in filteredTodos" :key="item.id">
        <input type="checkbox" @click="checkTodoTask(item.id)" />
        {{ item.taskName }}
        <del-button @click="deleteTodoTask(item.id)">✖</del-button>
      </base-single-li>
      <!-- <div class="noTodos" v-if="filteredTodos == null">
        Oops! 没有相关任务哟..
      </div> -->
    </transition-group>
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
      if (this.todoList == 0) {
        return 0;
      } else {
        return this.todoList.filter(
          (todo) => todo.taskName.indexOf(this.thefilteredWord) !== -1
        );
      }
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
  padding: 0.3em 0;
  color: rgba(255, 166, 0, 0.795);
  background-color: #fff;
  font-size: 1.4em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

ul .li input {
  width: 75%;
  padding: 0 0.5em;
  border: none;
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
