<template>
  <div id="homeTemplate">
    <router-view></router-view>
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
  name: "homeTemplate",
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({});
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, store, router);
    });
    const ref = toRefs(data);
    return {
      ...ref,
    };
  },
});
</script>

<style scoped lang="less">
#homeTemplate {
  height: 100%;
  min-height: 100%;
}
</style>
