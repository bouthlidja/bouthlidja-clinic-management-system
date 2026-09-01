// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

// استيراد جميع صفحات الأدمن
import DashboardAdmin from '@/modules/admin/views/DashboardView.vue'
import DoctorAdmin from '@/modules/admin/views/DoctorView.vue'
import SpecialtiesAdmin from '@/modules/admin/views/SpecialtiesView.vue'
import ServicesAdmin from '@/modules/admin/views/ServiceView.vue'
import MedicinesAdmin from '@/modules/admin/views/MedicinesView.vue'
import LabTestsAdmin from '@/modules/admin/views/LabtestView.vue'
import UsersAdmin from '@/modules/admin/views/UserView.vue'
import FinancialReportsAdmin from '@/modules/admin/views/FinalncialReportsView.vue'
import ActivityLogAdmin from '@/modules/admin/views/ActivityLogView.vue'
import SettingsAdmin from '@/modules/admin/views/SettingsView.vue'
import notificationsAdmin from '@/modules/admin/views/NotificationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/admin',
      path: '/',
      component: AdminLayout, // هذا هو الإطار الذي يحتوي على الـ Sidebar
      children: [
        {
          path: 'dashboard', // المسار: /admin/dashboard
          name: 'AdminDashboard',
          component: DashboardAdmin,
        },
        {
          path: 'notifications', // المسار: /admin/dashboard
          name: 'Adminnotifications',
          component: notificationsAdmin,
        },
        {
          path: 'doctors', // المسار: /admin/doctors
          name: 'AdminDoctors',
          component: DoctorAdmin,
        },
        {
          path: 'specialties', // المسار: /admin/specialties
          name: 'AdminSpecialties',
          component: SpecialtiesAdmin,
        },
        {
          path: 'services', // المسار: /admin/services
          name: 'AdminServices',
          component: ServicesAdmin,
        },
        {
          path: 'medicines', // المسار: /admin/medicines
          name: 'AdminMedicines',
          component: MedicinesAdmin,
        },
        {
          path: 'lab-tests', // المسار: /admin/lab-tests
          name: 'AdminLabTests',
          component: LabTestsAdmin,
        },
        {
          path: 'users', // المسار: /admin/users
          name: 'AdminUsers',
          component: UsersAdmin,
        },
        {
          path: 'financial-reports', // المسار: /admin/financial-reports
          name: 'AdminFinancialReports',
          component: FinancialReportsAdmin,
        },
        {
          path: 'activity-log', // المسار: /admin/activity-log
          name: 'AdminActivityLog',
          component: ActivityLogAdmin,
        },
        {
          path: 'settings', // المسار: /admin/settings
          name: 'AdminSettings',
          component: SettingsAdmin,
        },
        {
          // إذا ذهب المستخدم إلى /admin فقط، يُحوّل تلقائياً إلى dashboard
          path: '',
          redirect: { name: 'AdminDashboard' },
        },
      ],
    },
    // يمكنك إضافة مسار تسجيل الدخول هنا لاحقاً
    // {
    //   path: '/login',
    //   component: () => import('@/modules/auth/views/LoginView.vue'),
    // },
  ],
})

export default router
