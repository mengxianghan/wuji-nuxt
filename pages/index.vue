<template>
    <div>首页</div>
    <div>
        <a-button type="primary" @click="refresh()">刷新</a-button>
    </div>
    <div>
        <pre><code>{{ dynamic?.data }}</code></pre>
    </div>
</template>

<script lang="ts" setup>
const { data: dynamic, refresh } = useAsyncData('list', async () =>
    useRequest('school').post(
        '/data',
        { id: 1 },
        { headers: { Test: 'test custom option' } }
    )
)
</script>

<style scoped></style>
