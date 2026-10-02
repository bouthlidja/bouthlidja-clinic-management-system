<script setup>
import { Plus } from '@lucide/vue'
import ActionButton from './ActionButton.vue'
</script>

<template>
  <ActionButton :title="$t('actions.add')">
    <Plus :size="18" />
  </ActionButton>
</template>
