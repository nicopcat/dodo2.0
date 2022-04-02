<template>
  <base-lists>
    <div class="switch-tabs">
      <div class="wrapper">
        <button @click="setDone" :class="selectedDone">
          已完成<span class="doneBadge">{{ this.doneCount }}</span>
        </button>
        <button @click="setDoing" :class="selectedDoing">
          未完成<span class="todoBadge">{{ this.todoCount }}</span>
        </button>
      </div>
    </div>
  </base-lists>
</template>

<script>
import BaseLists from "../UI/BaseLists.vue";
export default {
  components: { BaseLists },
  emits: ["tab-switch"],
  data() {
    return {
      selectedDone: "",
      selectedDoing: "btn-active",
    };
  },
  computed: {
    todoCount() {
      if (this.$store.getters.todoList == 0) {
        return 0;
      } else {
        return this.$store.getters.todoList.length;
      }
    },
    doneCount() {
      if (this.$store.getters.doneList == 0) {
        return 0;
      } else {
        return this.$store.getters.doneList.length;
      }
    },
  },
  methods: {
    setDone() {
      this.selectedDone = "btn-active";
      this.selectedDoing = "";
      this.$emit("tab-switch", "done-tasks");
    },
    setDoing() {
      this.selectedDoing = "btn-active";
      this.selectedDone = "";
      this.$emit("tab-switch", "doing-tasks");
    },
  },
};
</script>

<style scoped>
.switch-tabs {
  height: 5rem;
}

.switch-tabs .wrapper {
  height: 1.2rem;
  padding: 2rem 2rem 1rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.switch-tabs .wrapper button {
  float: right;
  margin-top: 2px;
  position: relative;
  padding: 0.35rem 0.8rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  color: rgb(0, 94, 184);
}

.switch-tabs .wrapper .btn-active {
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-bottom: 1px solid rgba(255, 255, 255);
  border-radius: 3px;
  font-weight: 550;
  color: rgb(52, 52, 52);
}

.doneBadge {
  background-color: rgba(0, 128, 0, 0.829);
  color: white;
  position: absolute;
  top: 0vh;
  width: 1em;
  height: 1em;
  border-radius: 2px;
  transform: scale(0.55);
}

.todoBadge {
  background-color: rgba(255, 162, 0, 0.925);
  color: white;
  position: absolute;
  top: 0vh;
  width: 1em;
  height: 1em;
  border-radius: 2px;
  transform: scale(0.55);
}
</style>