<template>
  <div class="content">
    <!--   @TODO router view cannot be used inside of a transition anymore like that -->
    <!--    <Transition>-->
    <!--      &lt;!&ndash; your content here &ndash;&gt;-->
    <!--      <router-view />-->
    <!--    </Transition>-->
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
