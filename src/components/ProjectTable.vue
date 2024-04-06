<script setup>

import InputText from "primevue/inputtext";
import {ref} from "vue";
import {FilterMatchMode} from "primevue/api";
import router from '/src/main.js'
const filters = ref({
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
})
const selectedProduct = ref()
</script>

<template>
  <DataTable v-model:selection="selectedProduct" @rowSelect="onRowSelect" selectionMode="single" v-model:filters="filters"  :globalFilterFields="['name']" :showGridlines='true' :value="dats">
    <div>
      <InputText class="p-1 m-2 border shadow pl-2" v-model="filters['global'].value" placeholder="Keyword Search"/>
    </div>
    <Column v-for="col,i in columns" :key="i" :style="col.style" v-bind:field="col.field" sortable :header="col.name"></Column>
  </DataTable>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    dats: {
      type: Array
    },
  },
}
const onRowSelect = (event) => {
  console.log(event)
  router.push(`/projects/${event.data.name}`)
}
</script>
<style scoped>

</style>