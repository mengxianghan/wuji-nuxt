<template>
    <div class="p-4">
        <h2 class="text-xl mb-4">
            登录
            <template v-if="isLogin">
                ，您已登录，现在正在切换账号操作，<span @click="handleLogout"
                    >退出登录</span
                >
            </template>
        </h2>
        <a-form :model="formData" :rules="formRules" ref="formRef">
            <a-form-item name="account">
                <a-select
                    v-model:value="formData.account"
                    :options="[
                        { label: '个人账户', value: 1 },
                        { label: '机构账户', value: 2 },
                    ]"
                    @change="onAccountChange"
                ></a-select>
            </a-form-item>
            <a-form-item name="loginName">
                <a-input
                    placeholder="请输入用户名"
                    v-model:value="formData.loginName"
                ></a-input>
            </a-form-item>
            <a-form-item name="password">
                <a-input
                    type="password"
                    placeholder="请输入密码"
                    v-model:value="formData.password"
                ></a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" block @click="handleLogin">
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts">
import * as commonApis from '~/apis/common'

const token = useMyCookie('token')
const uuid = useMyCookie('uuid')
const agencyId = useMyCookie('agencyId')
const { isLogin } = await useUserInfo()
const formData = ref({})
const formRules = ref({})
const formRef = ref()

function onAccountChange(value) {
    switch (value) {
        case 1:
            formData.value = {
                loginName: '18810622636',
                password: '53zaixian',
            }
            break
        case 2:
            formData.value = {
                loginName: 'test_ty_111',
                password: '53Inside',
            }
            break
    }
}

/**
 * 登录
 */
function handleLogin() {
    formRef.value.validate().then(async (values) => {
        const { code, data } = await commonApis.login({
            ...values,
            platformFlag: 'school',
        })
        if (code === '200') {
            clearNuxtState()
            const { token: _token, userInfoRsp: userInfo } = data
            token.value = _token
            uuid.value = userInfo.uuid
            agencyId.value = userInfo.agencyInfoRspList[0].agencyId

            navigateTo('/')
        }
    })
}

function handleLogout() {
    clearNuxtState()
    token.value = ''
    uuid.value = ''
    agencyId.value = ''

    navigateTo('/')
}
</script>

<style scoped></style>
