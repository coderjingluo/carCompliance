<template>
  <div id="testCase">
    <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleMenuOpen"
          @close="handleMenuClose"
          router
        >
          <el-sub-menu>
            <template #title>
              <!--              <el-icon><location /></el-icon>-->
              <span>渗透测试</span>
            </template>
            <el-menu-item index="/web/internal-network">内网扫描</el-menu-item>
            <el-menu-item index="2-2">测试2</el-menu-item>
            <el-menu-item index="2-3">测试3</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "testCase",
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({});
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, router);
    });
    const handleMenuOpen = () => {};
    const handleMenuClose = () => {};
    const ref = toRefs(data);
    return {
      ...ref,
      handleMenuOpen,
      handleMenuClose,
    };
  },
});
</script>

<style scoped lang="less">
#testCase {
}
</style>
