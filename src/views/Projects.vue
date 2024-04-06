<script setup>
import Dialog from 'primevue/dialog';
import MyButton from "@/components/MyButton.vue";
import InputText from 'primevue/inputtext';
import {FilterMatchMode} from 'primevue/api';
import ProjectTable from "@/components/ProjectTable.vue";
import {ref} from "vue";

const visible = ref(false)

</script>

<template>
  <div class="container mx-auto shadow border mt-3 flex  items-center p-5 rounded-lg">
    <MyButton @click="visible = true">Добавить проект</MyButton>
  </div>
  <div class="container mx-auto border mt-3 shadow rounded-lg p-5 w-full">
    <ProjectTable :dats="dats" :columns="[{field:'name',name:'Наименование'}]"></ProjectTable>

  </div>
  <Dialog class="mx-auto w-full" v-model:visible="visible" modal header="Добавить проект" :style="{ width: '25rem' }">
    <form action="">
      <div class="flex flex-col align-items-center gap-3 mb-3">
        <label for="project" class="font-semibold w-6rem">Проект</label>
        <InputText id="username" v-model="project.name" class="flex p-1 border shadow w-full" autocomplete="off"/>
      </div>
      <MyButton @click.prevent="addProject">Добавить</MyButton>
    </form>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
  </Dialog>


</template>
<script>
export default {
  data() {
    return {
      project: {
        id: '',
        name: '',
        date: Date.now()
      },
      dats: [{
        name: "Нежилое"
      },
        {
          name: "Воронеж"
        }, {
          name: "Азбука"
        }, {
          name: "Нежилое"
        }]
    }
  },
  methods: {
    addProject() {
      console.log(this.dats)
    }
  }
}
</script>
<style scoped>

</style>