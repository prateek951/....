<template>
    <div class="chat container">
        <h2 class="center green-text">WeChat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text time">time</span>
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
import UserMessage from '@/components/UserMessage'

export default {
  name: "Chat",
  props: ["name"],
  components: {
      UserMessage
  },
  data() {
    return {};
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
    font-size: 1.2em;
}
</style>
