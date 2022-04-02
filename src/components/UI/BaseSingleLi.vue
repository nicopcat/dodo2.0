<template>
  <li>
    <slot></slot>
  </li>
</template>

<style scoped>
li::before {
  content: "";
  border-left: 4px solid green;
  font-size: 1.2em;
  margin-right: 0.2em;
}

li {
  margin: 0.5em 0.5em 0 0.4em;
  font-size: 1rem;
  padding: 0.3em 0;
  line-height: 1.3em;
  cursor: pointer;
  border-bottom: 1px solid rgba(192, 192, 192, 0.268);
  border-top: 1px solid rgba(192, 192, 192, 0.268);
}

li:hover {
  background-color: rgba(51, 126, 198, 0.1);
}
</style>