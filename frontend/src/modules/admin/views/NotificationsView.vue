<script setup>
import MainHeader from '../../../components/MainHeader.vue'
</script>
<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.notifications.title')"
      :description="$t('mainHeader.notifications.description')"
    />
  </div>
</template>

<style scoped></style>
