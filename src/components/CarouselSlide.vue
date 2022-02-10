<template>
  <keep-alive>
    <transition>
      <slot v-if="isShow">Example</slot>
    </transition>
  </keep-alive>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props) {
    const isShow = props.isShow;
    return {
      isShow,
    };
  },
};
</script>

<style scoped>
v-enter-active,
v-leave-active {
  @apply duration-100;
}

v-enter-from,
v-leave-to {
  @apply opacity-0;
}

v-enter-from {
  @apply -translate-x-full;
}
v-leave-to {
  @apply translate-x-full;
}

v-enter-to,
v-leave-from {
  @apply translate-x-0 opacity-100;
}
</style>
