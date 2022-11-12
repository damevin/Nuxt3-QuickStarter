<template>
  <h1 class="atom__welcome-title">{{ title }}</h1>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: 'Hello world !',
  },
)
</script>

<style lang="postcss">
.atom {
  &__welcome-title {
    @apply text-xl md:text-3xl;
  }
}
</style>
