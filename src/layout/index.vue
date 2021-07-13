<template>
  <div>
    <panel></panel>
  </div>
</template>

<script lang="ts">
import Panel from './components/panel.vue';
import {
  ref,
  reactive,
  computed,
  toRefs,
  watch,
  watchEffect,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
} from 'vue';
export default {
  name: 'layout',
  components: {
    Panel,
  },
};
</script>
