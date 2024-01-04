<template>
  <div id="InternalNetwork">
    <div class="host-info">
      <div class="internal-network-select">
        <el-select
          placeholder="ADB会话选择"
          v-model="adbHost"
          @change="adbSelect"
          clearable
        >
          <el-option value="1" label="113.252.88.158:5555" />
        </el-select>
        <el-select placeholder="SSH会话选择" v-model="sshHost" clearable>
          <el-option value="2" label="113.252.88.158:22" />
        </el-select>
      </div>
      <div class="internal-network-operation">
        <el-button type="primary">立即执行</el-button>
        <el-button type="success">添加任务</el-button>
      </div>
    </div>
    <div class="host-scan"></div>
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
  name: "InternalNetwork",
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({
      adbHost: "",
      sshHost: "",
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, router);
    });
    const adbSelect = (value) => {
      console.log(value);
    };
    const ref = toRefs(data);
    return {
      ...ref,
      adbSelect,
    };
  },
});
</script>

<style scoped lang="less">
#InternalNetwork {
  text-align: left;
}
.internal-network-select {
  float: left;
}
.internal-network-operation {
  float: right;
}
</style>
