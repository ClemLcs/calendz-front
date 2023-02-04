<template>
  <div class="content">
    <Transition>
      <!-- your content here -->
      <router-view />
    </Transition>
  </div>
</template>
<script>
export default {}
</script>
<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease-out;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
