<template>
    <div>
        <div>组件2</div>
        <div v-for="item in list" :key='item.name'>
            <span>姓名：{{item.name}},</span>
            <span>年龄：{{item.age}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['list'],
    updated() {
        console.log('组件2更新')
    }
}
</script>

