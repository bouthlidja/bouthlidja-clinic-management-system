<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="page-header">
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.page-header {
  padding-inline-start: 35px;
  padding-top: 12px;
}
.page-header h2 {
  font-size: 30px;
  text-transform: uppercase;
}
.page-header p {
  transform: translateY(-50%);
  color: var(--text-dim);
  opacity: 0.55;
}
</style>
