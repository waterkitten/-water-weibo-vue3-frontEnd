<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const linkProps = (to) => {
      return {
        to,
      };
    };
    return {
      type: 'router-link',
      linkProps,
    };
  },
});
</script>
