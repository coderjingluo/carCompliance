<template>
  <div id="homeView">
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
  name: "homeView",
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({});
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, store, router);
      electron();
    });
    const ref = toRefs(data);
    const electron = () => {
      router.push("/cs");
    };
    return {
      ...ref,
      electron,
    };
  },
});
</script>

<style scoped lang="less">
#homeView {
}
</style>
