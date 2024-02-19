<template>
  <form>
    <div  class="my-5 flex flex-col">
      <label>firstName</label>
      <input placeholder="i.e Jane" class="border"/>
    </div>

    <div  class="my-5 flex flex-col">
      <label>lastName</label>
      <input placeholder="i.e Mercy" class="border"/>
    </div>
    <div  class="my-5 flex flex-col">
      <label>middleName</label>
      <input placeholder="i.e Kelvin" class="border"/>
    </div>

    <div  class="my-5 flex flex-col">
      <label>contact</label>
      <input placeholder="i.e +254756354278" class="border"/>
    </div>

    <div class="my-5 flex flex-col">
      <label>Age"</label>
      <input placeholder="i.e 32" class="border"/>
    </div>

    <div  class="my-5 flex flex-col">
      <label>Gender</label>
      <input placeholder="i.e Male" class="border"/>
    </div>

    <div  class="my-5 flex flex-col">
      <label>Height(metres)"</label>
      <input placeholder="i.e 34 m" class="border"/>
    </div>

    <n-button @click="$attrs.handleSubmit({})">
      Register new patient
    </n-button>
  </form>
</template>

<script setup lang="ts">
// import { FormInst } from 'naive-ui'


</script>


<style scoped>

</style>
