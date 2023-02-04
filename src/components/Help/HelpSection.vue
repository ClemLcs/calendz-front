<template>
  <div>
    <!-- ====================================== -->
    <!-- == Section header ==================== -->
    <!-- ====================================== -->
    <div
      class="row cursor-pointer"
      @click="$emit('select')"
    >
      <!-- left -->
      <div class="col-11">
        <h2>{{ title }}</h2>
      </div>

      <!-- right -->
      <div class="col-1 d-flex justify-content-end align-items-center ml--3 ">
        <i
          :class="{ 'open': open }"
          class="fas fa-chevron-right text-gray section-animate"
        />
      </div>
    </div>

    <hr class="mt-3 mb-4">

    <!-- ====================================== -->
    <!-- == Main slot ========================= -->
    <!-- ====================================== -->
    <Transition>
      <div
        v-show="open"
        class="collapse show"
      >
        <slot />
        <hr class="my-5">
      </div>
    </Transition>
  </div>
</template>

<script>

export default {
  name: 'HelpSection',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/*@TODO transition: collapse*/
.section-animate {
  -moz-transition: all .1s linear;
  -webkit-transition: all .1s linear;
  transition: all .1s linear;
}

.section-animate.open{
  -moz-transform:rotate(90deg);
  -webkit-transform:rotate(90deg);
  transform:rotate(90deg);
}
</style>
