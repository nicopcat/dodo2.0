<template>
  <div class="nav">
    <div class="logo">
      <a href="/">
        <!-- 引入assets中的img -->
        <!-- <img src="@/assets/icon.svg" alt="logo" /> -->
        <img
          src="@/assets/img/android-chrome-192x192.png"
          alt="logo"
        />
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
  /* min-width: 420px; */
  width: 100%;
  height: 60px;
  background-color: rgb(0, 94, 184);
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  line-height: 55px;
}

.nav .logo {
  position: absolute;
  left: 0.6rem;
  width: 8rem;
  margin: 2px 0;
}

.nav .logo a img {
  width: 38px;
  float: left;
  margin: 7px 3px;
  border-radius: 6px;
  margin-left: 0.8%;
}

.nav h2 {
  font-size: 22px;
  font-weight: 500;
  float: left;
  color: white;
  background: transparent;
}

.nav .inp {
  margin-left: 30%;
  min-width: 55%;
  width: 65%;
}
</style>
