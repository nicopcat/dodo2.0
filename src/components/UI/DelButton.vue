<template>
  <span>
    <slot></slot>
  </span>
</template>

<style scoped>
span {
  float: right;
  padding: 0.2em 0.3em;
  height: 1em;
  line-height: 1.1em;
  cursor: pointer;
  border-radius: 4px;
  color: rgb(252, 252, 252);
  background-color: rgba(118, 118, 118, 0.932);
  transition: all 0.5s;
  transform: scale(0.7);
}

span:hover {
  background-color: rgba(122, 122, 122, 0.571);
}
</style>