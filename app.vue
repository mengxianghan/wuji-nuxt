<template>
    <a-extract-style>
        <a-config-provider
            :theme="{
                token: {
                    borderRadius: 4,
                },
            }"
        >
            <NuxtLayout>
                <NuxtPage/>
            </NuxtLayout>
        </a-config-provider>
    </a-extract-style>
</template>
