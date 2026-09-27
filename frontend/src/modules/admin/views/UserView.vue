<script setup>
import MainHeader from '../../../components/MainHeader.vue'
</script>
<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.users.title')"
      :description="$t('mainHeader.users.description')"
    />
  </div>
</template>

<style scoped></style>
