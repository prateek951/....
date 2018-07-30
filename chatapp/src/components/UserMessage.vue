<template>
    <div class="user-message">
        <form @submit.prevent="onAddMessage()">
            <label for="user-message">User Message</label>
            <input 
                type="text" 
                placeholder="Type Something" 
                name="user-message"
                v-model="userMessage">
                <p class="red-text" v-if="feedback">{{feedback}}</p>
        </form>
    </div>
</template>

<script>
export default {
  name: "UserMessage",
  props: ["name"],
  data() {
    return {
      userMessage: null,
      feedback: null
    };
  },
  methods: {
    onAddMessage() {
      if (this.userMessage) {
        // console.log("inside the onAddMessage", this.userMessage,this.name,Date.now());
        //Reach out to firebase and add it to firestore
          
      
      } else {
        this.feedback = "You must enter a message";
        setTimeout(() => {
          this.feedback = null;
        }, 2000);
      }
    }
  }
};
</script>
