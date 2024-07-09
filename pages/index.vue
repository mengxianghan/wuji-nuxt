<template>
    <div>
        <h2 class="text-xl font-semibold">首页</h2>
        <template v-if="isLogin">
            <a-space :size="8">
                <a-avatar :src="userInfo.completeAvatar"></a-avatar>
                <span>{{ userInfo.loginName }}</span>

                <nuxt-link to="/login">切换账号</nuxt-link>
            </a-space>
        </template>

        <template v-else>
            <div>
                <nuxt-link to="/login">登录</nuxt-link>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const { isLogin, userInfo } = await useUserInfo()
</script>

<style scoped></style>
