<template>
  <form>
    <input type="text" placeholder="First Name" /> <br />
    <input type="text" placeholder="Last Name" /> <br />
    <input type="text" placeholder="Comment" /> <br />

    <button>ADD</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  width: 35%;
  margin: auto;
  padding: 10px;
  border: 1px solid #a24250;
  border-radius: 3px;
}
form input {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
}
form input:first-child {
  margin-top: 10px;
}
form button {
  width: 100%;
  padding: 8px;
  border: none;
  background: #a24250;
  border-radius: 3px;
  margin-bottom: 10px;
}
</style>
