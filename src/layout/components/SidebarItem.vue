<template>
  <div v-if="!item.hidden"></div>
</template>

<script lang="ts">
import path from 'path';
import AppLink from './Link.vue';
import { defineComponent, PropType, ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';
export default defineComponent({
  name: 'SidebarItem',
  components: { AppLink },
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
});
</script>