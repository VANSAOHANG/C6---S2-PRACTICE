<template>
  <form @submit.prevent="addName">
    <input type="text" placeholder="First Name" v-model="firstName" /> <br />
    <input type="text" placeholder="Last Name" v-model="lastName" /> <br />
    <input type="email" placeholder="Email" v-model="email" /> <br />
    <br />

    <button type="submit">ADD USER</button>
  </form>
</template>

<script>
export default {
  name: "friemd-form",
  emits: ["add-data"],
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    addName() {
      if (this.firstName != "" && this.lastName != "" && this.email != "") {
        this.$emit("add-data", this.firstName, this.lastName, this.email);
        this.firstName = "";
        this.lastName = "";
        this.email = "";
      }
    },
  },
};
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
  background: #1165bd;
  border-radius: 3px;
  margin-bottom: 10px;
  color: #fff;
}
</style>
