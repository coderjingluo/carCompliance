<template>
  <div id="AdbSession">
    <div class="connect-form">
      <el-form
        label-position="left"
        label-width="100px"
        :model="adbFormData"
        style="max-width: 550px; width: 400px"
        size="default"
      >
        <el-form-item label="IP地址">
          <el-input v-model="adbFormData.ipAddr" />
        </el-form-item>
        <el-form-item label="端口">
          <el-input v-model="adbFormData.port" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="connect"
            size="default"
            style="width: 100%"
          >
            连接
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="connected-table">
      <el-table
        :data="connectedData"
        stripe
        style="width: 100%; margin-bottom: 20px"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="ipAddr" label="远程主机" width="180" />
        <el-table-column prop="port" label="连接端口" width="100" />
        <el-table-column prop="status" label="连接状态" width="100" />
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button type="danger" size="small">测试</el-button>
            <el-button type="warning" size="small">断开连接</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" size="small">刷新</el-button>
      <el-button type="warning" size="small">关闭</el-button>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  // defineEmits,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "AdbSession",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const data = reactive({
      adbFormData: {
        ipAddr: "",
        port: "",
      },
      connectedData: [
        {
          ipAddr: "113.252.88.20",
          port: "5555",
          status: "1",
        },
      ],
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, store, router);
      console.log("----------adb------------");
      console.log(props.message);
    });
    const connect = () => {};
    const ref = toRefs(data);
    return {
      ...ref,
      connect,
    };
  },
});
</script>

<style scoped lang="less">
#AdbSession {
}
.connect-form {
  float: left;
  padding: 0 20px;
}
.connected-table {
  float: right;
}
</style>
