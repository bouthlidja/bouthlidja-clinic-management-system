<!-- src/layouts/AdminLayout.vue -->

<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'

const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="admin-wrapper" :class="{ 'sidebar-collapsed': isCollapsed }">
    <SideBar :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

    <main class="page-container">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-wrapper {
  min-height: 100vh;
  display: flex;
}

.page-container {
  min-height: 100vh;
  padding: 20px;
  flex-grow: 1;
}
</style>
