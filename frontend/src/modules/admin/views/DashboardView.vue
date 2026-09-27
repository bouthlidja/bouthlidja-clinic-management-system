<script setup>
import MainHeader from '../../../components/MainHeader.vue'
</script>

<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.dashboard.title')"
      :description="$t('mainHeader.dashboard.description')"
    />
  </div>
</template>

<style scoped>
.card {
  border-radius: var(--border-radius-soft);
  background-color: var(--card-bg);
}
</style>
