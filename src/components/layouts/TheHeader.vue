<template>
  <div class="nav">
    <div class="logo">
      <a href="/">
        <!-- 引入assets中的img -->
        <img src="@/assets/icon.svg" alt="logo" />
        <h2>Dodo</h2>
      </a>
    </div>
    <div class="inp">
      <user-input></user-input>
    </div>
  </div>
</template>

<script>
import UserInput from "./UserInput.vue";

export default {
  components: {
    UserInput,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  height: 55px;
  background-color: rgb(0, 94, 184);
  display: flex;
  justify-content: stretch;
}
.nav .logo a img {
  width: 38px;
  float: left;
  margin: 7px 3px;
  border-radius: 6px;
  margin-left: 0.8%;
}
.nav .logo {
  position: absolute;
  left: 0.6rem;
  width: 8rem;
  float: left;
  height: 40px;
  margin: 2px 0;
  margin-left: 0.1%;
}

.nav h2 {
  font-size: 22px;
  font-weight: 500;
  float: left;
  color: white;
  margin: 15px 0px 0 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.486);
}

.nav .inp {
  margin-left: 30%;
  width: 68%;
  height: 40px;
  line-height: 62px;
}
</style>
