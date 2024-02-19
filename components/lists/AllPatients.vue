<script setup lang="ts">
const { $client } = useNuxtApp()
const allPatients = await $client.patients.getAll.useQuery()
console.log(allPatients)
</script>

<template>
  <div>
    <n-table class="">
      <legend>Patients</legend>
      <tr>
        <th>Id</th>
        <th>Names</th>
        <th>Age</th>
        <th>Registered</th>
      </tr>
      <tbody>
      <tr>
        <td>werf-ity-oepw</td>
        <td>Mr. Juma ALlan Karanja</td>
        <td>22</td>
        <td>24th February 2024</td>
      </tr>
      </tbody>
    </n-table>
    <NuxtLink to="/patients/new">New Patient</NuxtLink>
  </div>
</template>

<style scoped>

</style>
