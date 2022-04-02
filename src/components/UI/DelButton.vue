<template>
  <span>
    <slot></slot>
  </span>
</template>

<style scoped>
span::before {
  content: “\2716”;
}

span {
  float: right;
  /* margin: 0.2em 0.1em 0 0; */
  padding: 0 0.4em;
  /* font-size: 10px; */
  cursor: pointer;
  border-radius: 4px;
  color: rgb(252, 252, 252);
  background-color: rgba(118, 118, 118, 0.932);
  transition: all 0.5s;
  transform: scale(0.8);
}

span:hover {
  background-color: rgba(122, 122, 122, 0.571);
}
</style>