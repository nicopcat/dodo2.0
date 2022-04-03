<template>
  <div class="nav">
    <div class="logo">
      <a href="/dodo-v2">
        <!-- 引入assets中的img -->
        <!-- <img src="@/assets/icon.svg" alt="logo" /> -->
        <img
          src="https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com//iconsTheHeader-2022-04-02-21-31-51.svg"
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
  height: 55px;
  background-color: rgb(0, 94, 184);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  line-height: 55px;
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

  margin: 2px 0;
}

.nav h2 {
  font-size: 22px;
  font-weight: 500;
  /* float: left; */
  color: white;
  background: transparent;
}

.nav .inp {
  margin-left: 30%;
  min-width: 55%;
  width: 65%;
}
</style>
