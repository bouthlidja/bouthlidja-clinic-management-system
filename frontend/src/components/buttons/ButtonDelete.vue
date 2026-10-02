<script setup>
import { Trash } from '@lucide/vue'
import ActionButton from './ActionButton.vue'
</script>

<template>
  <ActionButton :title="$t('actions.delete')">
    <Trash :size="18" />
  </ActionButton>
</template>
