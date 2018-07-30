<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
          <h2 class="green-text">Welcome</h2>
          <form @submit.prevent="onEnterChat()">
            <label for="name">Enter your name</label>
            <input type="text" placeholder="Enter your name" v-model="name">
            <button class="btn green">Enter Chat</button>
          </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: ''
    };
  },
  methods: {
    onEnterChat(){
      console.log('inside the onEnterChat method....',this.name);
      //Bande ka naam pick krlo and then make him enter the chat 
      //redirect him to the /chat route
    }
  }
};
</script>