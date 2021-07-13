<template>
  <div class="screen-full" @click="onClick">
    <i
      :title="isFullscreen ? 'exit fullscreen' : 'fullscreen'"
      :class="isFullscreen ? 'iconfont team-iconexit-fullscreen' : 'iconfont team-iconfullscreen'"
    >
    </i>
  </div>
</template>

<script >
import screenfull from 'screenfull';
import { defineComponent } from '@vue/composition-api';
import { ref, onUnmounted, defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'screenfull',
  setup() {
    //接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value
    let isFullscreen = ref(false);

    const onClick = () => {
      if (!screenfull.isFullscreen) {
        return;
      }
      //开关
      screenfull.toggle();
    };
    const change = () => {
      isFullscreen.value = screenfull.isFullscreen;
    };
    const init = () => {
      if (screenfull.isEnabled) {
        screenfull.on('change', change);
      }
    };
    const destroy = () => {
      if (screenfull.isEnabled) {
        screenfull.off('change', change);
      }
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      destroy();
    });
    return {
      isFullscreen,
      onclick,
    };
  },
});
</script>
<style lang="scss" scoped>
.screen-full {
  width: 40px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    cursor: pointer;
    background: #f0f0f0;
  }
}
</style>