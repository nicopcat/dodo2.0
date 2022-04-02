<template>
  <input
    type="text"
    v-model="enteredVal"
    placeholder="搜索看看.."
    @keyup.enter="passFilterWord"
  />
  <button @click="passFilterWord">搜索</button>
</template>

<script>
export default {
  data() {
    return {
      enteredVal: "",
    };
  },
  methods: {
    passFilterWord() {
      this.$store.dispatch("passFilterWord", this.enteredVal);
      this.enteredVal = "";
    },
  },
};
</script>
<style scoped>
input {
  width: 60%;
  max-width: 620px;
  height: 34px;
  padding: 0 0.8em;
  border-radius: 1em;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgb(241, 247, 252);
  transition: background-color 0.6s;
}

input:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
input:focus {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.836);
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
input:-moz-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

button {
  text-transform: none;
  margin-left: 0.8rem;
  width: 62px;
  height: 33px;
  background-color: rgb(0, 96, 191);
  color: white;
  border: none;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  outline: none;
  text-decoration: none;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.6s;
}

button:hover {
  background-color: rgba(198, 203, 236, 0.2);
}

.btn-active {
  background-color: #fff;
}
</style>