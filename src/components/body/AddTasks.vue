<template>
  <div class="add-tasks">
    <input
      type="text"
      placeholder="添加一个任务.."
      v-model="enteredVal"
      @focus="showBtn"
      @blur="closeBtn"
      @keyup.enter="submitTask"
    />
    <button
      @click="submitTask"
      :class="btnState === 'showBtn' ? 'showBtn' : null"
    >
      添加任务
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredVal: "",
      btnState: "",
    };
  },
  methods: {
    submitTask() {
      this.$store.dispatch("addNewList", {
        id: new Date().toISOString(),
        taskName: this.enteredVal,
        done: false,
      });
      this.loadTodoList();
      this.enteredVal = "";
    },
    loadTodoList() {
      this.$store.dispatch("loadTodo");
    },
    showBtn() {
      this.btnState = "showBtn";
    },
    closeBtn() {
      if (this.enteredVal === "") {
        this.btnState = null;
      }
    },
  },
};
</script>

<style scoped>
.add-tasks {
  width: 100%;
}
.add-tasks input {
  min-width: 92%;
  height: 2.2rem;
  margin: 1rem auto;
  padding: 0 0.5rem;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.35s;
}
.add-tasks input:focus {
  border: 1px solid rgba(0, 94, 184);
  outline: rgba(0, 94, 184);
}

.add-tasks input::-webkit-input-placeholder {
  font-size: 14px;
}

.add-tasks input::-moz-placeholder {
  font-size: 14px;
}

.add-tasks input::-ms-input-placeholder {
  font-size: 14px;
}

.add-tasks button {
  float: right;
  margin-right: 1.4rem;
  margin-bottom: 10px;
  width: 5rem;
  height: 0rem;
  background: transparent;
  border: none;
  color: transparent;
  transition: 0.4s color;
  cursor: pointer;
}

.add-tasks .showBtn {
  color: black;
  width: 5rem;
  height: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background-color: rgb(0, 96, 191);
  color: white;
  border-radius: 4px;
  font-weight: 500;
}
</style>