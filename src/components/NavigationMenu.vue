<template>
  <section id="app">
    <nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>HELP?</li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
nav {
  background: #a24250;
  color: white;
}
nav ul {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 15px 25px;
}
nav ul li {
  margin-right: 15px;
}
li {
  list-style: none;
}
</style>
