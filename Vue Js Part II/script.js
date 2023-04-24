const app = Vue.createApp  ({})

app.component("my-first-component",{
    data() {
        return{
            propertyName: 0 
        }
    },
    template: `
     <button v-on:click="propertyName++">
       clicked {{ propertyName }} times
     </button>
    `
}).mount("#my-first-div")

const app01 = Vue.createApp({})

app01.component("header-component" , {
    props: ["title"],
    template: `<h2>{{ title }}</h2>`
}).mount("#Component-props-div")

const app03 = Vue.createApp({
    data() {
        return {
            headers: [
                { id: 1, title: "My First Header"},
                { id: 2, title: "My Second Header"},
                { id: 3, title: "My Third Header"}
            ],
            headerFontSize: 1
        }
    }
})

// app03.component("header-component2", {
//     props: ["title"],
//     template:
//     <div class = ""
// })