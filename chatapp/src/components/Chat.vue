<template>
    <div class="chat container">
        <h2 class="center green-text">WeChat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message of messages" :key="message.id">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <UserMessage :name="name"/>
            </div>
        </div>

    </div>
</template>


<script>
import UserMessage from "@/components/UserMessage";
import db from "@/utils/fb";
import moment from 'moment';

export default {
  name: "Chat",
  props: ["name"],
  components: {
    UserMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy('timestamp');
    ref.onSnapshot(snapshot => {
      // console.log(snapshot.docChanges());
      snapshot.docChanges().forEach(change => {
        // console.log(change);
        console.log(change.doc);
        let doc = change.doc;
        // console.log(change.doc.name); wont work
        console.log("I am the name", doc.data().name);
        console.log("I am the content", doc.data().content);
        console.log("I am the time", doc.data().timestamp);
        this.messages.push({
          id: doc.id,
          name: doc.data().name,
          content: doc.data().content,
          timestamp: moment(doc.data().timestamp).format('lll')
        });
        // console.log(this.messages);
      });
    });
  },
  methods: {},
  computed: {}
};
</script>


<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
    max-height: 300px;
    overflow: auto;
}
.messages::-webkit-scrollbar {
    width: 3px;
}
.messages::-webkit-scrollbar-track {
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}
</style>
