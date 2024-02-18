<script setup lang="ts">

</script>

<template>
  <div class="flex gap 10">
    <Nuxt-Link to="admin/patients" class="ml-3 border border-1 border-gray-100 p-10 hover:bg-gray-50">
      <n-statistic label="Registered Patients" value="472" />
    </Nuxt-Link>
    <Nuxt-Link to="admin/staffs" class="ml-3 border border-1 border-gray-100 p-10 hover:bg-gray-50">
      <n-statistic label="Staff" value="34" />
    </Nuxt-Link>
    <Nuxt-Link to="admin/reports" class="ml-3 border border-1 border-gray-100 p-10 hover:bg-gray-50">
      <n-statistic label="Total reports" value="472" />
    </Nuxt-Link>
    <Nuxt-Link to="admin/medicines" class="ml-3 border border-1 border-gray-100 p-10 hover:bg-gray-50">
      <n-statistic label="Medicines" value="34,567" />
    </Nuxt-Link>
    <Nuxt-Link to="admin/appointments" class="ml-3 border border-1 border-gray-100 p-10 hover:bg-gray-50">
      <n-statistic label="Scheduled Appointments" value="472" />
    </Nuxt-Link>

  </div>

</template>

<style scoped>

</style>
