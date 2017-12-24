<template>
    <div class="hello">
        <List1 :list="list1"></List1>   
        <List2 :list="list2"></List2>
        <InputText :text="text" @input="input"/>
    </div>
</template>

<script>
import List1 from './List1'
import List2 from './List2'
import InputText from './InputText'
export default {
    name: "HelloWorld",
    data() {
        return {
            list1: [{
                name: 'name1',
                age: '1'
            }, {
                name: 'name2',
                age: '2'
            }],
            list2: [{
                name: 'name3',
                age: '3'
            }, {
                name: 'name4',
                age: '4'
            }],
            text: ''
        };
    },
    components: {
        List1,
        List2,
        InputText
    },
    mounted() {
        setTimeout(() => {
            this.list2 = [{
                name: 'name3',
                age: '3'
            }, {
                name: 'name4',
                age: '4'
            }]
        }, 1000)
    },
    updated() {
        console.log('父组件更新')
    },
    methods: {
        input(v) {
            this.text = v
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
