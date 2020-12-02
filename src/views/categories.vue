<template>
  <div class="project_describe">本项目依据于 <a target="_blank" href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/introduce">You need to know css</a></div>
  <div class="categories">
    <div class="demo_project_list">
      <div class="project_item">
        <!-- <transition :name="transitionName"> -->
          <router-link to="/border_background/translucent_borders">半透明边框</router-link>
        <!-- </transition> -->

      </div>

    </div>
  </div>
  <div class="box1"></div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.project_describe {
  margin-left: 4rem;
}
.categories {
  margin: auto;
  width: 80rem;
  height: 10rem;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  .demo_project_list {
    // margin: 2rem;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    .project_item {
      width: 15rem;
      height: 5rem;
      margin-top: 2.5rem;
      a {
        // margin: auto 0;
        height: 5rem;
        font-size: 2rem;
        line-height: 5rem;
      }
    }
  }
}
</style>