<script setup>
import { GlobeOff } from '@lucide/vue'
import ActionButton from './ActionButton.vue'
</script>
<template>
  <ActionButton :title="$t('actions.disable')">
    <GlobeOff :size="18" />
  </ActionButton>
</template>
