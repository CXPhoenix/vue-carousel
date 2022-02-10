<script setup>
import SlideFrame from "./components/SlideFrame";
import CarouselSlide from "./components/CarouselSlide.vue";
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div
      class="flex min-h-[25rem] w-[35rem] items-center justify-center rounded-lg border-2 border-gray-400"
    >
      <SlideFrame>
        <CarouselSlide>我是第一張</CarouselSlide>
        <CarouselSlide>我是第二張</CarouselSlide>
      </SlideFrame>
    </div>
  </div>
</template>

<style></style>
