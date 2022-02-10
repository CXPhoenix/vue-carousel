<template>
  <div class="relative h-full w-full">
    <div class="flex h-full w-full items-center justify-center">
      <slot>這是一個 Carousel</slot>
    </div>
    <div
      class="absolute inset-0 flex h-full w-full items-center justify-between"
    >
      <button
        class="text-3xl hover:bg-gray-900/20"
        data-key="prev"
        @click="prev"
      >
        &lt;
      </button>
      <button
        class="text-3xl hover:bg-gray-900/20"
        data-key="next"
        @click="next"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
import { ref, h } from "vue";
export default {
  props: {
    prev: Function,
    next: Function,
  },
  setup(props) {
    const prev = props.prev;
    const next = props.next;
    return {
      prev,
      next,
    };
  },
};
</script>

<style></style>
