<template>
  <div class="tile-container">
    <div v-for="item in items" :key="item.id" class="tile">
      <h2>{{ item.title }}</h2>
      <p>{{ item.author }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const response = await axios.get('http://localhost:3000/api/data')
    this.items = response.data
  }
})
</script>

<style scoped>
.tile-container {
 display: flex;
 flex-wrap: wrap;
}

.tile {
 flex: 1 0 calc(33.33% - 20px); /* adjust as needed */
 margin: 10px;
}
</style>
