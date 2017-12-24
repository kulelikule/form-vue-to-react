<template>
    <div>
        <input type="text" :value="text" @input="input">
        <span>输入的文字为：{{text}}</span>
    </div>
</template>
<script>
export default {
    props: ['text'],
    updated() {
        console.log('组件3更新')
    },
    methods: {
        input(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

