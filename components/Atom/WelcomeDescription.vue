<template>
  <h1 class="atom__welcome-description">{{ description }}</h1>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    description: string
  }>(),
  {
    description: 'This is a description',
  },
)
</script>

<style lang="postcss">
.atom {
  &__welcome-description {
    @apply text-xl md:text-3xl;
  }
}
</style>
