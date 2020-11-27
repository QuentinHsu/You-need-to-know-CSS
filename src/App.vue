<template>
  <div id="nav">
    <div class="title">You need to know CSS</div>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 3rem;
  .title {
    font-size: 2rem;
    font-weight: 700;
  }
}

</style>
