<template>
  <transition name="fade">
    <div class="h-full w-full text-center" v-if="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Slide",
  props: ["isShow"],
  setup(props) {
    const isShow = props.isShow;
    return {
      isShow,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply duration-500;
}

.fade-enter-active {
  @apply absolute;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}

.fade-enter-from {
  @apply -translate-x-[50%];
}

.fade-leave-to {
  @apply translate-x-[50%];
}
</style>
