<template>
  <div>
    <setting> </setting>
    <sidebar></sidebar>
  </div>
</template>

<script lang="ts">
import Setting from './components/setting.vue';
import Sidebar from './components/sidebar/index.vue';
export default {
  name: 'layout',
  components: {
    Setting,
    Sidebar,
  },
};
</script>
