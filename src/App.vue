<script setup>
import Slides from "./components/Slides.js";
import Slide from "./components/Slide.vue";
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div
      class="flex min-h-[25rem] w-[35rem] items-center justify-center rounded-lg border-2 border-gray-400"
    >
      <Slides>
        <Slide>第一章</Slide>
        <Slide>第二章</Slide>
      </Slides>
    </div>
  </div>
</template>

<style></style>
