<template>
  <section>
    <li>
      <h2>{{ friend.name }}</h2>
      <span>{{ friend.email }}</span>
    </li>
  </section>
</template>

<script>
export default {

  props: [
    'friend',
  ],
};
</script>

<style scoped>
h2 {
  margin: 0;
}
li {
  list-style: none;
  width: 35.4%;
  margin: auto;
  margin-right: 31.5%;
  padding: 10px;
  border-radius: 5px;
  color: #a24250;
  background: white;
  box-shadow: #aaa5a6  0px 3px 3px;
  border-left: 3px solid #1165bd;
  margin-bottom: 5px;
}
</style>
