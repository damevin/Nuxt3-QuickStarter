<template>
  <div class="molecule__welcome-header">
    <AtomWelcomeTitle :title="'Welcome to my quick starter project !'" />
    <AtomWelcomeDescription :title="'Welcome to my quick starter project !'" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.molecule {
  &__welcome-header {
    @apply flex flex-col items-center justify-center w-full h-screen;
  }
}
</style>
