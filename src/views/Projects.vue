<script setup>

import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <div class="container mx-auto shadow border mt-3 flex items-center p-5 rounded-lg">
    <MyButton @click="addProject">Добавить проект</MyButton>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  data() {
    return {}
  },
  methods: {
    addProject() {
      Modal.show=true
    }
  }
}
</script>
<style scoped>

</style>