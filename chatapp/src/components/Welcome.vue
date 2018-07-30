<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
          <h2 class="green-text">Welcome</h2>
          <form @submit.prevent="onEnterChat()">
            <label for="name">Enter your name</label>
            <input type="text" @keypress="onDiminishFeedback()" placeholder="Enter your name" v-model="name">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
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
      name: null,
      feedback: null
    };
  },
  methods: {
    onEnterChat() {
      if (this.name) {
        console.log("Welcome to the chat application");
        this.feedback = "";
        //Redirect the user
        // this.$router.push('/chat');
        this.$router.push({ name: "Chat", params : { name: this.name}});
      } else {
        this.feedback = "You must enter a name to join";
      }
    },
    onDiminishFeedback() {
      setTimeout(() => {
        if (this.name) {
          this.feedback = null;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
form input[type="text"] {
  margin-top: 30px;
}
.welcome button {
  margin: 30px auto;
}
</style>
