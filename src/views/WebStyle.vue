<template>
  <div id="webStyle">
    <div class="nav-container">
      <el-tabs tab-position="top" style="height: 90%" class="demo-tabs">
        <el-tab-pane label="会话管理">
          <el-tabs tab-position="left" style="height: 100%" class="demo-tabs">
            <el-tab-pane label="SSH">SSH</el-tab-pane>
            <el-tab-pane label="ADB">
              <adb-session :message="'aa'"></adb-session>
            </el-tab-pane>
            <el-tab-pane label="CAN">CAN</el-tab-pane>
            <el-tab-pane label="Doip">DOIP</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="任务管理">任务管理</el-tab-pane>
        <el-tab-pane label="测试用例">
          <test-case></test-case>
        </el-tab-pane>
        <el-tab-pane label="接口设置">接口设置</el-tab-pane>
      </el-tabs>
    </div>
    <div class="bottom"></div>
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
import AdbSession from "@/components/ADBSession";
import TestCase from "@/views/TestCase";
export default defineComponent({
  name: "webStyle",
  components: { TestCase, AdbSession },
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({});
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, store, router);
      console.log("----------------------");
    });
    const ref = toRefs(data);
    return {
      ...ref,
    };
  },
});
</script>

<style scoped lang="less">
#webStyle {
  padding: 10px;
}
</style>
