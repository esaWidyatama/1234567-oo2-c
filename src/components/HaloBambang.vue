<template>
  <p>hello apa kabar</p><br>
  <v-text-field v-model="mhs.npm" label="NPM" variant="outlined"></v-text-field><br>
  <v-text-field v-model="mhs.nama" label="Nama" variant="outlined"></v-text-field><br>
  <v-text-field v-model="mhs.ipk" label="IPK" variant="outlined"></v-text-field><br>
  <v-btn @click="createMahasiswa" color="#AB47BC">
    Submit
  </v-btn><br>
</template>
<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa.ts'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 100,
      mhs: new Mahasiswa ('1234', 'Bambang', 3.4)
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    },
    createMahasiswa() {
      alert('Mahasiswa '+ this.mhs.nama +' berhasil dibuat')
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>