<template>
  <div class="main">
    <base-lists>
      <switch-tabs @tab-switch="selectTabs($event)"></switch-tabs>
      <add-tasks></add-tasks>
      <done-list v-if="selectedTabs === 'done-tasks'"></done-list>
      <todo-list v-if="selectedTabs === 'doing-tasks'"></todo-list>
    </base-lists>
  </div>
</template>

<script>
import SwitchTabs from "./SwitchTabs.vue";
import AddTasks from "./AddTasks.vue";
import TodoList from "./TodoList.vue";
import DoneList from "./DoneList.vue";

export default {
  components: {
    SwitchTabs,
    AddTasks,
    TodoList,
    DoneList,
  },
  data() {
    return {
      selectedTabs: "doing-tasks",
    };
  },
  methods: {
    selectTabs(tab) {
      this.selectedTabs = tab;
    },
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 720px;
  min-width: 320px;
  min-height: 85vh;
  border-radius: 0.8rem;
  background-color: rgb(255, 255, 255);
}
</style>