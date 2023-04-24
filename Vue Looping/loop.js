Vue.createApp({}).mount("#loop-range")

Vue.createApp({
  data() {
    return {
      items: [
        { content: "Item Here"},
        { content: "Item There"}
      ]
    }
  }
}).mount("#to-loop-array")

Vue.createApp({
  data() {
    return {
      items: [
        {content: "Hello"},
        {content: "Hi"},
        {content: "Hey"}
      ]
    }
  }
}).mount("#looping-array")