<script setup>
import { Search } from '@lucide/vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: 'Search...',
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

const clearSearch = () => {
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="search-input">
    <Search class="search-icon" :size="19" />

    <input type="text" :value="modelValue" :placeholder="placeholder" @input="updateValue" />

    <button
      v-if="modelValue"
      type="button"
      class="clear-button"
      aria-label="Clear search"
      @click="clearSearch"
    >
      <X :size="17" />
    </button>
  </div>
</template>

<style scoped>
.search-input {
  position: relative;

  width: 100%;
  max-width: 360px;
  height: 40px;

  display: flex;
  align-items: center;

  background-color: var(--secondary-bg);

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

/* Search Icon */

.search-icon {
  flex-shrink: 0;
  margin-inline-start: 12px;

  color: var(--text-dim);
  opacity: 0.7;

  pointer-events: none;
}

/* Input */

.search-input input {
  width: 100%;
  height: 100%;

  padding: 0 12px;

  background: transparent;
  border: none;
  outline: none;

  color: var(--text-white);

  font-family: var(--font-family-base);
  font-size: 14px;

  text-align: start;
}

.search-input input::placeholder {
  color: var(--text-dim);
  opacity: 0.55;
}

/* Focus */

.search-input:focus-within {
  border-color: var(--hover-bg);

  box-shadow:
    0 0 0 2px rgba(42, 92, 138, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Clear Button */

.clear-button {
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  margin-inline-end: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;

  color: var(--text-dim);

  border-radius: 6px;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.clear-button:hover {
  background-color: var(--hover-bg);
  color: var(--text-white);
}

/* Responsive */

@media (max-width: 576px) {
  .search-input {
    max-width: 100%;
  }
}
</style>
