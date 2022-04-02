<template>
  <transition-group appear tag="span">
    <slot></slot>
  </transition-group>
</template>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
/* 进入过程和离开过程的过渡 */
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
/* 离开时变为absolute，导致下方上升 */
.v-leave-active {
  text-decoration-line: line-through;
  position: absolute;
}
/* 移动时的过渡时间 */
.v-move {
  transition: all 0.8s ease;
}
</style>