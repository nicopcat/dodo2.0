<template>
  <div>
    <!-- <slot name="header"></slot> -->
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  background-color: #fff;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 12px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16); */
  padding: 0 0.5rem;
}
h2 {
  font-size: 1.6em;
  margin-left: 0.2em;
}
</style>