<script setup>
import MainHeader from '../../../components/MainHeader.vue'
</script>
<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.medicines.title')"
      :description="$t('mainHeader.medicines.description')"
    />
  </div>
</template>

<style scoped></style>
