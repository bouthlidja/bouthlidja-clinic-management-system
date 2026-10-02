<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button :type="type" class="action-button" :title="title">
    <slot />
  </button>
</template>

<style scoped>
.action-button {
  width: var(--button-size);
  height: var(--button-size);
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--hover-bg);
  outline: none;
  background-color: transparent;
  color: var(--text-white);

  border-radius: 0.3em;
  cursor: pointer;

  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;
}

.action-button::after,
.action-button::before {
  content: '';
  position: absolute;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: transform 0.5s ease;
  transform-origin: center;
}

.action-button::after {
  top: -10px;
}

.action-button::before {
  top: 80%;
}

.action-button:hover::before,
.action-button:hover::after {
  transform: scale(0);
}

.action-button:hover {
  box-shadow: inset 0 0 25px var(--hover-bg);
}

.action-button:active {
  transform: scale(0.94);
}

.action-button:focus-visible {
  box-shadow: 0 0 0 2px var(--hover-bg);
}
</style>
