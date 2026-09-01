<script setup>
import { RouterLink } from 'vue-router'
import {
  ChevronLeft,
  Bell,
  Hospital,
  LayoutDashboard,
  Stethoscope,
  UserRound,
  UsersRound,
  BriefcaseMedical,
  Pill,
  FlaskConical,
  ChartNoAxesCombined,
  History,
  Settings,
  LogOut,
} from '@lucide/vue'

defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggle-sidebar'])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <!-- Collapse Toggle Button -->
    <button class="toggle-btn" @click="toggleSidebar" aria-label="Toggle Navigation">
      <ChevronLeft :size="18" />
    </button>

    <!-- Branding Section -->
    <div class="branding">
      <Hospital :size="32" />
      <span>HMS Clinic</span>
    </div>

    <!-- Navigation Menu -->
    <nav class="nav-menu">
      <!-- Global Dashboard -->

      <RouterLink to="/Dashboard" class="nav-item" data-title="Dashboard">
        <LayoutDashboard />
        <span>{{ $t('dashboard') }}</span>
      </RouterLink>
      <RouterLink to="/notifications" class="nav-item notification-item" data-title="Notifications">
        <Bell :size="20" />
        <span>{{ $t('notifications') }}</span>
        <!-- <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span> -->
      </RouterLink>
      <div class="divider"></div>

      <!-- Group 1: Medical Operations -->
      <div class="group-label">{{ $t('medicalOperations') }}</div>
      <RouterLink to="/doctors" class="nav-item" data-title="Doctors">
        <UserRound />
        <span>{{ $t('doctors') }}</span>
      </RouterLink>

      <RouterLink to="/specialties" class="nav-item" data-title="Specialties">
        <Stethoscope :size="20" />
        <span>{{ $t('specialties') }}</span>
      </RouterLink>

      <RouterLink to="/services" class="nav-item" data-title="Services">
        <BriefcaseMedical :size="20" />
        <span>{{ $t('services') }}</span>
      </RouterLink>

      <RouterLink to="/medicines" class="nav-item" data-title="Medicines">
        <Pill :size="20" />
        <span>{{ $t('medicines') }}</span>
      </RouterLink>

      <RouterLink to="/lab-tests" class="nav-item" data-title="Lab Tests">
        <FlaskConical :size="20" />
        <span>{{ $t('labTests') }}</span>
      </RouterLink>

      <div class="divider"></div>

      <!-- Group 2: System Administration -->
      <div class="group-label">{{ $t('systemAdministration') }}</div>
      <RouterLink to="/users" class="nav-item" data-title="User Management">
        <UsersRound :size="20" />
        <span>{{ $t('users') }}</span>
      </RouterLink>

      <RouterLink to="/financial-reports" class="nav-item" data-title="Reports">
        <ChartNoAxesCombined :size="20" />
        <span>{{ $t('financialReports') }}</span>
      </RouterLink>

      <RouterLink to="/activity-log" class="nav-item" data-title="Activity Log">
        <History :size="20" />
        <span>{{ $t('activityLog') }}</span>
      </RouterLink>

      <RouterLink to="/settings" class="nav-item" data-title="Settings">
        <Settings :size="20" />
        <span>{{ $t('settings') }}</span>
      </RouterLink>
    </nav>

    <!-- Logout Section -->
    <div class="logout-section">
      <button type="button" class="nav-item logout-item" data-title="Logout">
        <LogOut :size="20" />
        <span>{{ $t('logout') }}</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: relative;
  top: 0;
  inset-inline-start: 0; /* left or right = 0 ar en */
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--primary-bg);
  color: var(--text-white);
  display: flex;
  flex-direction: column;
  /* z-index: 1000; */
  transition: width var(--transition-speed) ease;
  box-shadow: var(--box-shadow);
}

.sidebar.collapsed {
  width: var(--sidebar-collapsed-width);
}

/* =========================
    Branding
  ========================= */

.branding {
  padding: 24px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  overflow: hidden;
  white-space: nowrap;
}

.branding svg {
  width: 32px;
  min-width: 32px;
  height: 32px;

  color: var(--text-white);
}

.branding span {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* =========================
    Toggle Button
  ========================= */

.toggle-btn {
  position: absolute;
  top: 24px;
  inset-inline-end: -15px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-bg);
  color: var(--text-white);

  border: 2px solid var(--primary-bg);
  border-radius: 50%;

  cursor: pointer;

  z-index: 1001;

  transition:
    transform var(--transition-speed) ease,
    background-color var(--transition-speed) ease;
}

.toggle-btn:hover {
  background-color: var(--hover-bg);
}

.sidebar.collapsed .toggle-btn {
  transform: rotate(180deg);
}

/* =========================
    Navigation Menu
  ========================= */

.nav-menu {
  flex: 1;

  overflow-y: auto;

  padding: 20px 0;

  scrollbar-width: thin;
  scrollbar-color: var(--secondary-bg) transparent;
}

.group-label {
  padding: 0 24px 10px;

  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1px;

  color: var(--text-dim);

  opacity: 0.55;

  transition: opacity 0.2s ease;
  text-align: center;
}

.sidebar.collapsed .group-label {
  opacity: 0;
  pointer-events: none;
}

/* =========================
    Navigation Items
  ========================= */

.nav-item {
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;

  padding: 14px 24px;

  background: transparent;
  border: none;

  color: var(--text-dim);

  text-decoration: none;

  cursor: pointer;

  white-space: nowrap;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.nav-item svg {
  width: 22px;
  min-width: 22px;
  height: 22px;

  margin-right: 15px;
}

.nav-item span {
  font-weight: 500;
  transition: opacity 0.2s ease;
}

/* Hover */

.nav-item:hover {
  background-color: var(--hover-bg);
  color: var(--text-white);
}

/* Active Router Link */

.router-link-active {
  background-color: var(--active-bg);
  color: var(--text-white);

  box-shadow:
    inset 4px 0 0 var(--text-white),
    0 0 15px var(--accent-glow);
}

/* =========================
    Collapsed Sidebar
  ========================= */

.sidebar.collapsed .nav-item {
  justify-content: center;

  padding: 14px 0;
}

.sidebar.collapsed .nav-item::after {
  inset-inline-start: 90px; /* مكان ظهور التلميحات */
}

.sidebar.collapsed .nav-item svg {
  margin-inline-end: 15px;
}

.sidebar.collapsed .nav-item span {
  opacity: 0;

  position: absolute;

  pointer-events: none;
}

/* =========================
    Divider
  ========================= */

.divider {
  height: 1px;

  margin: 10px 24px;

  background-color: rgba(255, 255, 255, 0.1);
}

/* =========================
    Tooltip
  ========================= */

.sidebar.collapsed .nav-item::after {
  content: attr(data-title);

  position: absolute;

  left: 90px;

  padding: 6px 12px;

  background-color: var(--secondary-bg);
  color: var(--text-white);

  border-radius: 4px;

  font-size: 0.8rem;

  opacity: 0;

  pointer-events: none;

  white-space: nowrap;

  transform: translateX(-10px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.sidebar.collapsed .nav-item:hover::after {
  opacity: 1;

  transform: translateX(0);
}

/* =========================
    Logout Section
  ========================= */

.logout-section {
  padding: 20px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-item {
  color: #ff8a8a;
}

.logout-item:hover {
  background-color: rgba(255, 92, 92, 0.1);

  color: #ffb0b0;
}
.logout-section button {
  background: none;
  border: none;
  outline: none;
}
</style>
