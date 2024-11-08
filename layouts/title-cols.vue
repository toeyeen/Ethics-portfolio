<template>
  <div class="slidev-layout" grid="~ cols-2 gap-x-2" mt5>
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})

</script>

<style scoped></style>
