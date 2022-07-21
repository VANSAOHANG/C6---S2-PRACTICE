<template>
<section>

  <nav-menu></nav-menu> <br><br>
  <form-user @add-data="addUser"></form-user> <br><br>
  <user-card v-for="friend of friends" :key="friend" :friend="friend"></user-card>

</section>

</template>

<script>

export default {
  data(){
    return {
      friends:[
        {name: 'Johnny Depp', email: 'johnny.depp@example.com'},
        {name: 'Johnny Depp', email: 'johnny.depp@example.com'},
        {name: 'Johnny Depp', email: 'johnny.depp@example.com'},
      ]
    }
  },
  methods:{
    addUser(fName,lName,email){
      this.friends.unshift({name:fName+" "+lName, email:email});
    }
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
