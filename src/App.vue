<template>
  <router-view v-if="isRouterAlive" />
</template>

<script>
import { provide, unref, reactive, ref, defineComponent, nextTick } from "vue";

export default defineComponent({
  setup() {
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(function () {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    return {
      isRouterAlive,
      // ...unref(isRouterAlive),
      reload,
    };
  },
});
</script>
