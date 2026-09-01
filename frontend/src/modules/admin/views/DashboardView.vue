<script setup></script>

<template>
  <div class="dashboard-page">
    <h2 class="mb-4">لوحة التحكم الرئيسية</h2>

    <!-- بطاقات الإحصائيات السريعة -->
    <div class="row g-3 mb-4">
      <div class="col-md-3">
        <div class="card p-3 shadow-sm border-0">
          <div class="text-muted small">إجمالي المرضى</div>
          <div class="fs-3 fw-bold text-primary">124</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3 shadow-sm border-0">
          <div class="text-muted small">مواعيد اليوم</div>
          <div class="fs-3 fw-bold text-success">18</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3 shadow-sm border-0">
          <div class="text-muted small">حالات الانتظار</div>
          <div class="fs-3 fw-bold text-warning">5</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3 shadow-sm border-0">
          <div class="text-muted small">إلغاءات المواعيد</div>
          <div class="fs-3 fw-bold text-danger">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: var(--border-radius-soft);
  background-color: var(--card-bg);
}
</style>
