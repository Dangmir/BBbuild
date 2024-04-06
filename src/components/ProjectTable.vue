<script setup>

import InputText from "primevue/inputtext";
import {ref} from "vue";
import {FilterMatchMode} from "primevue/api";

const filters = ref({
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
})
</script>

<template>
  <DataTable v-model:filters="filters" :globalFilterFields="['name']" show-gridlines :value="dats"
             tableStyle="min-width: 50rem">
    <div>
      <InputText class="p-1 m-2 border shadow pl-2" v-model="filters['global'].value" placeholder="Keyword Search"/>
    </div>
    <Column v-for="col,i in columns" :key="i" v-bind:field="col.field" sortable :header="col.name"></Column>
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
    }
  }
}
</script>
<style scoped>

</style>