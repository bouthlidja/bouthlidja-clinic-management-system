<script setup>
import MainHeader from '../../../components/MainHeader.vue'
</script>
<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.activityLog.title')"
      :description="$t('mainHeader.activityLog.description')"
    />
  </div>
</template>

<style scoped></style>
