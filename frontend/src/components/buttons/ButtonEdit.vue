<script setup>
import { SquarePen } from '@lucide/vue'
import ActionButton from './ActionButton.vue'

defineProps({
  title: {
    type: String,
    default: 'Edit',
  },
})
</script>

<template>
  <ActionButton :title="$t('actions.edit')">
    <SquarePen :size="18" />
  </ActionButton>
</template>
