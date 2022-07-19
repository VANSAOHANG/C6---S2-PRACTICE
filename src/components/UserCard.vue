<template>
  <ul id="card">
    <li v-for="card in cards" :key="card">
      <h2>{{ card.name }}</h2>
      <span>{{ card.description }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { name: "RONAN ORGOR", description: "The best of the best" },
        { name: "RONAN ORGOR", description: "The best of the best" },
      ],
    };
  },
};
</script>

<style scoped>
#card h2 {
  margin: 0;
}
#card li {
  list-style: none;
  width: 35.4%;
  margin: auto;
  margin-right: 31.5%;
  padding: 10px;
  border-radius: 3px;
  color: #a24250;
  background: white;
  border: 1px solid #a24250;
  margin-bottom: 5px;
}
</style>
