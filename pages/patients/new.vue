<template>
  <PatientForm :handleSubmit="handleSubmit"/>
</template>

<script setup lang="ts">
import PatientForm from "~/components/forms/patientForm.vue";
async function handleSubmit (userData:Object) {
  console.log(userData)
  // const user = await useFetch('/api/patients/new', {
  //   method: 'post',
  //   body: { ...userData }
  // })

  // console.log('user: ', user)
}
</script>

<style scoped>

</style>
