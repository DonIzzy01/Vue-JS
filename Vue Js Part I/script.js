const InputedForm = {
    data() {
        return {
          inputText: "Type Here"  
        }
    }
}

Vue.createApp(InputedForm).mount("#inputForm")

const UserInteraction = {
    data() {
        return {
            text: "racecar"
        }
    },
    methods: {
        checkResult() {
            this.text = this.text.split("").reverse().join("")
        }
    }
}

Vue.createApp(UserInteraction).mount("#textToReverse")

const ConditionalVisibility = {
    data() {
        return {
            visible: true
        }
    }
}

Vue.createApp(ConditionalVisibility).mount("#conditionalVisibility")

const List = {
    data() {
        return {
            listItems: [
                {item: "Study Vue Course" },
                {item: "Learn React Native" },
                { item: "Study Angular"}
            ]
        }
    }
}

Vue.createApp(List).mount("#list")

const Timer = {
    data() {
        return {
            timer: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.timer++
        },1000)
    }
}

Vue.createApp(Timer).mount("#timer")

const ReactiveBehavior= {
    data() {
        return {
            onHoverText: "The Reactive Message"
        }
    }
}

Vue.createApp(ReactiveBehavior).mount("#to-hover-element")

Vue.createApp({}).mount("#loop-range")

Vue.createApp({
    data() {
        return {
            items: [
                { content: "Item here"},
                { content: "Item There"}
            ]
        }
    }
}).mount("#To-Loop-List")

Vue.createApp({
    data() {
        return {
            items: [
                { content: "Hello" },
                { content: "Hi" },
                { content: "Hey" }
            ]
        }
    }
}).mount("#to-loop-list2")

Vue.createApp({
    data() {
        return {
            sampleObject: {
                title: "My Object",
                author: "Your Name",
                property: "Test Property"
            }
        }
    }
}).mount("#loop-through-object-values")

Vue.createApp({
    data() {
        return {
            dogObject: {
                breed: "Retriever",
                ageInYears: 5,
                owner: "Obi Israel"
            }
        }
    }
}).mount("#dog-list")

Vue.createApp({
    data() {
        return {
            catObject: {
                breed: "Tabby",
                hungry: true,
                lives: 2
            }
        }
    }
}).mount("#cat-list")

Vue.createApp({
    data() {
        return {
            inputText02:"",
            textAreaContent: "",
            selected: "Search",
            options: [
                { text:"From a Search Engine",
                value: "Search" },
                { text: "From a Friend", value: "Friend"},
                {text: "Other", value:"other"}
            ],
            checkedOptions: [],
            radioButtonPicked: ""
        }
    }
}).mount("#form")
